import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#E4E4E4",
    padding: 30,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  header: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
  },
  invoiceDetails: {
    fontSize: 14,
    marginBottom: 20,
  },
  itemHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
    fontWeight: "bold",
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  total: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "right",
    marginTop: 10,
  },
});

const invoiceData = {
  invoiceNumber: "INV-1001",
  date: "2024-07-19",
  dueDate: "2024-08-19",
  client: "Jane Smith",
  clientAddress: "123 Main St, Anytown, USA",
  items: [
    {
      description: "Consulting Services",
      quantity: 10,
      rate: 100,
      amount: 1000,
    },
    {
      description: "Website Development",
      quantity: 1,
      rate: 1500,
      amount: 1500,
    },
    { description: "Hosting Fee", quantity: 1, rate: 100, amount: 100 },
  ],
  total: 2600,
};

// Create Document Component
const Invoice = () => {
  return (
    <div style={{ width: "50%" }}>
      <PDFViewer width="100%" height="600">
        <Document>
          <Page size="A4" style={styles.page}>
            <Text style={styles.header}>Invoice</Text>
            <View style={styles.section}>
              <Text style={styles.invoiceDetails}>
                Invoice Number: {invoiceData.invoiceNumber}
              </Text>
              <Text style={styles.invoiceDetails}>
                Date: {invoiceData.date}
              </Text>
              <Text style={styles.invoiceDetails}>
                Due Date: {invoiceData.dueDate}
              </Text>
              <Text style={styles.invoiceDetails}>
                Client: {invoiceData.client}
              </Text>
              <Text style={styles.invoiceDetails}>
                Address: {invoiceData.clientAddress}
              </Text>
            </View>
            <View style={styles.section}>
              <View style={styles.itemHeader}>
                <Text>Description</Text>
                <Text>Quantity</Text>
                <Text>Rate</Text>
                <Text>Amount</Text>
              </View>
              {invoiceData.items.map((item, index) => (
                <View style={styles.item} key={index}>
                  <Text>{item.description}</Text>
                  <Text>{item.quantity}</Text>
                  <Text>{item.rate}</Text>
                  <Text>{item.amount}</Text>
                </View>
              ))}
              <Text style={styles.total}>Total: ${invoiceData.total}</Text>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </div>
  );
};

export default Invoice;
