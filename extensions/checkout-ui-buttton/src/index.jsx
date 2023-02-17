import { useState, useEffect } from 'react';
import {
  render,
  TextField,
  InlineStack,
  Text,
  Button,
  Link,
  Modal,
  TextBlock,
  BlockLayout,
  View,
  Heading,
  BlockStack,
  useShippingAddress,
  useTotalAmount,
  useShop,
  useDiscountCodes,
  useApplyDiscountCodeChange,
  useSessionToken,
  useAttributes,
  useStorage,
  useExtensionApi
} from '@shopify/checkout-ui-extensions-react';






render('Checkout::Reductions::RenderAfter', () => (
  <ApplyDiscount />
));


render('Checkout::Dynamic::Render', () => (
  <RewardFromOrder />
));





const getDataFromApi = async function () {
  const response = await fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population');

  const data = await response.json();
  return data;
}




function RewardFromOrder() {
  const [tokenUserWillGet, setTokenUserWillGet] = useState(55);
  const userTotalAmount = useTotalAmount();
  const storeDetails = useShop(); // store details - domain, name
  const appliedDiscountCopons = useDiscountCodes(); // all discount copons applied
  const applyCoponCode = useApplyDiscountCodeChange(); // apply discount copons
  // await applyCoponCode("copon");

  // const sessionToken = useSessionToken();
  // await sessionToken.get();

  const storageLocal = useStorage();
  // await storageLocal.write("user","new user");

  const { shop } = useExtensionApi();



  useEffect(async () => {

    return 
    const getProductsQuery = {
      query: `query {
        appInstallation {
          accessScopes {
            handle
            description
          }
        }
      }`,
    };

    const apiVersion = 'unstable';
    console.log(`${shop.storefrontUrl}api/${apiVersion}/graphql.json`);
    const response = await fetch(
      `${shop.storefrontUrl}api/${apiVersion}/graphql.json`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(getProductsQuery),
      },
    )

    try {
      console.log(response);
      let data = await response.json();
      console.log('====================================');
      console.log("data");
      console.log(data);
      console.log('====================================');
      
    } catch (error) {
      console.log('====================================');
      console.log("error");
      console.log(error);
      console.log('====================================');
    }


  }, [shop]);


  return (
    <View border="base" padding="base">

      <Heading>Use our Loyalty program for getting Discount</Heading>
      <Heading>Total Points you will get from this order: {userTotalAmount?.amount}</Heading>
      <Heading>Value of your tokens: {userTotalAmount?.currencyCode}{tokenUserWillGet / 4}</Heading>
      <Text size="small">You get 1 token for order of {userTotalAmount?.currencyCode}1</Text>
    </View>
  )
}

function ModelContent() {

  const [totalPointsUserHave, setTotalPointsUserHave] = useState(11);

  useEffect(() => {
    setTotalPointsUserHave(4327);
  }, [])

  return (
    // <BlockLayout rows={[60, 'fill']}>
    <BlockLayout>
      
      <View border="base" padding="base">
        <Heading>Total Points you have: {totalPointsUserHave}</Heading>
        <Heading>Total value of tokens: ${totalPointsUserHave / 4}</Heading>
        <Text size="small">4 tokens is equal to $1</Text>
      </View>
      <Text size="small">You can use Maximam 200 tokens in this order</Text>
      <InlineStack columns={['70%', 'fill']}>
        <TextField label="How much tokens do you want to apply?" />
        <Button>
          Apply Tokens
        </Button>
      </InlineStack>
    </BlockLayout>
  )
}




function ApplyDiscount() {
  const applyCoponCode = useApplyDiscountCodeChange(); // apply discount copons

  
const applyDiscountCode = async function(){
  const disocuntToken = "YXG022NQJKB2";
  console.log(await applyCoponCode({type: "addDiscountCode",code: disocuntToken}));  
}

  return (
    <BlockStack>
      <Text size="medium">You have 55 YT points</Text>
      {/* <Link
        overlay={
          <Modal padding title="Apply Discount with Loyaly points">
            <ModelContent />
          </Modal>
        }
      > */}
        <Button onPress={applyDiscountCode}>
          Apply Discount with Yt Points
        </Button>

      <Text size="medium">Cutomize Discount</Text>

      {/* </Link> */}
    </BlockStack>
  );
}


function App() {
  return (
    <InlineStack>
      {/* <Image source="/url/for/image" />
      <BlockStack>
        <Text size="large">Heading</Text>
        <Text size="small">Description</Text>
      </BlockStack> */}
      <TextField type='number' label="How much tokens??" />
      <Button
        onPress={() => {
          console.log('button was pressed');
        }}
      >
        Apply Discount with Your token
      </Button>
      {/* <Spinner /> */}

      <Link
        overlay={
          <Modal padding title="Return policy">
            <TextBlock>
              We have a 30-day return policy, which means you have 30 days after
              receiving your item to request a return.
            </TextBlock>
          </Modal>
        }
      >
        <Button>
          Popup
        </Button>
      </Link>
    </InlineStack>
  );
}
