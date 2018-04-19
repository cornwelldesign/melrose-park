import React from "react";
import Hero from "../components/Hero.js";

class contactPage extends React.Component {
  componentDidMount() {
    this.props.updateMeta(
      "Contact | Melrose Park ",
      "Get In Touch Today."
    );
  }

  render() {
    return (
      <div>
        <ContactDetails />
				<Register />
      </div>
    );
  }
}

export default contactPage;
