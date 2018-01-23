import { StyleSheet } from "react-native";

/**
 *
 */
export const styles = StyleSheet.create({
  view: {},
  codeBlock: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    backgroundColor: "#f5f5f5",
    padding: 10,
    borderRadius: 4
  },
  codeInline: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    backgroundColor: "#f5f5f5",
    padding: 10,
    borderRadius: 4
  },
  del: {
    backgroundColor: "#000000"
  },
  em: {
    fontStyle: "italic"
  },
  headingContainer: {
    flexDirection: "row"
  },
  heading: {},
  heading1: {
    fontSize: 32
  },
  heading2: {
    fontSize: 24
  },
  heading3: {
    fontSize: 18
  },
  heading4: {
    fontSize: 16
  },
  heading5: {
    fontSize: 13
  },
  heading6: {
    fontSize: 11
  },
  hr: {
    backgroundColor: "#000000",
    height: 1
  },
  blockquote: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    margin: 20,
    backgroundColor: "#CCCCCC"
  },
  inlineCode: {
    borderRadius: 3,
    borderWidth: 1,
    fontFamily: "Courier",
    fontWeight: "bold"
  },
  list: {},
  listItem: {
    flexWrap: "wrap"
    // backgroundColor: 'green',
  },
  listUnordered: {},

  listUnorderedItem: {
    flexDirection: "row"
  },

  listUnorderedItemIcon: {
    marginLeft: 10,
    marginRight: 10,
    lineHeight: 40
  },
  listUnorderedItemText: {
    fontSize: 20,
    lineHeight: 20
  },

  listOrdered: {},
  listOrderedItem: {
    flexDirection: "row"
  },
  listOrderedItemIcon: {
    marginLeft: 10,
    marginRight: 10,
    lineHeight: 40
  },
  listOrderedItemText: {
    fontWeight: "bold",
    lineHeight: 20
  },
  paragraph: {
    marginTop: 10,
    marginBottom: 10,
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start"
  },
  strong: {
    fontWeight: "bold"
  },
  table: {
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 3
  },
  tableHeader: {},
  tableHeaderCell: {
    flex: 1,
    // color: '#000000',
    padding: 5
    // backgroundColor: 'green',
  },
  tableRow: {
    borderBottomWidth: 1,
    borderColor: "#000000",
    flexDirection: "row"
  },
  tableRowCell: {
    flex: 1,
    padding: 5
  },
  text: {},
  strikethrough: {
    textDecorationLine: "line-through"
  },
  a: {
    textDecorationLine: "underline"
  },
  u: {
    borderColor: "#000000",
    borderBottomWidth: 1
  }
});
