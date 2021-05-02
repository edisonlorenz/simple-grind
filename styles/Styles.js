import { StyleSheet } from "react-native";
import Guidelines from "../components/Guidlines";

const styles = StyleSheet.create({
  /* Splash Styles */
  splashContainer: {
    flex: 1,
    backgroundColor: "#2d3e50",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  logo: {
    width: 250,
    height: 250,
  },
  logoText: {
    color: "#fff",
    textTransform: "uppercase",
    fontSize: 55,
    textAlign: "center",
    fontWeight: "bold",
  },
  flashTitle: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "bold",
  },
  flashText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  btnStart: {
    color: "#2d3e50",
    backgroundColor: "#fff",
    padding: 8,
    margin: 15,
    borderRadius: 25,
    width: 200,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  /** End Spash Style */

  /** Home Style */
  menuContainer: {
    flex: 1,
    backgroundColor: "#2d3e50",
    alignItems: "center",
  },
  menuItems: {
    margin: 2,
    height: 200,
  },
  text: {
    color: "#fff",
    padding: 5,
    fontSize: 22,
    fontFamily: "RobotoBold",
  },
  homeImage: {
    width: 400,
    height: 200,
    opacity: 0.9,
    justifyContent: "flex-end",
    alignItems: "left",
  },
  /** End Home Style */

  /**Progress Style*/

  listItem: {
    padding: 15,
    backgroundColor: "#f5f5f5",
    borderBottomWidth: 1,
    borderColor: "#2d3e50",
    marginLeft: 5,
    marginRight: 5,
  },
  listItemView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  listItemText: {
    fontSize: 19,
    fontWeight: "500",
  },
  listItemRep: {
    fontSize: 18,
    fontWeight: "300",
  },
  /**End Progress Style */
  exerlistItem: {
    padding: 15,
    backgroundColor: "#f5f5f5",
    borderBottomWidth: 1,
    borderColor: "#2d3e50",
    marginLeft: 5,
    marginRight: 5,
  },
  exerciseMenuImg: {
    width: "50%",
    height: 100,
  },
  /** Guidlines */
  guidelinesContainer: {
    flex: 1,
    backgroundColor: "#2d3e50",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  guidelinesImg: {
    width: 350,
    height: 350,
  },
  guidelinesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
     color: '#fff',
  },
  guidelinesText: {
    fontSize: 19,
    fontWeight:'500',
    color: '#fff',
  },
  btnGuidline:{
    color: "#2d3e50",
    backgroundColor: "#fff",
    padding: 8,
    margin: 15,
    borderRadius: 25,
    width: 200,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  }
  /** End Guidlines */
});

export default styles;
