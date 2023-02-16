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
  Heading
} from '@shopify/checkout-ui-extensions-react';



render('Checkout::Reductions::RenderAfter', () => (
  <AppDiscount />
  ));
  
  render('Checkout::Dynamic::Render[OrderSummary4]', () => (
    <RewardFromOrder />
));

render('Checkout::Dynamic::Render [OrderSummary4]', () => (
  <RewardFromOrder />
));




function RewardFromOrder() {
  const [tokenUserWillGet, setTokenUserWillGet] = useState(55)
  return (
    <View border="base" padding="base">
      <Heading>Total Points you will get from this order: {tokenUserWillGet}</Heading>
      <Heading>Value of your tokens: ${tokenUserWillGet / 4}</Heading>
      <Text size="small">You get 1 token for order of $1</Text>
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



function AppDiscount() {
  return (
    <BlockLayout>
      <Link
        overlay={
          <Modal padding title="Apply Discount with Loyaly points">
            <ModelContent />
          </Modal>
        }
      >
        <Button>
          Apply Discount with Your token
        </Button>
      </Link>
    </BlockLayout>
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
