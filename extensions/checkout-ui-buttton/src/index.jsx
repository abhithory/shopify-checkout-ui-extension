import {
  render,
  TextField,
  InlineStack,
  Button,
  Link,
  Modal,
  TextBlock
} from '@shopify/checkout-ui-extensions-react';



render('Checkout::Reductions::RenderAfter', () => (
  <AppDiscount />
));
render('Checkout::Dynamic::Render', () => (
  <App />
));



function AppDiscount() {
  return (
    <InlineStack>
  
      <Button
        onPress={() => {
          console.log('button was pressed');
        }}
      >
        Apply Discount with Your token
      </Button>
    </InlineStack>
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
