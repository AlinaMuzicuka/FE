import React, { Component } from "react";

class Content extends Component {
  state = {
    title: {
      home: "City sightseeing tour Regensburg",
      about: "Price",
      contact: "Contact us",
      faq: "FAQ",
    },
    content: {
      home: "Come with us on a tour through the Old Town and the unique history of Regensburg. From the Cathedral to the Old Town Hall to the Neupfarrplatz, from the Pratrician Residences to the Wurstkuchl - you will have a look at everything comfortably from your seat. During the trip you will learn funny and interesting, ancient and current, splendid and cruel, romantic and rapid things about Regensburg and its inhabitants. On this tour you will experience the highlights of several centuries in about 45 minutes and afterwards you will be well prepared to explore the city on your own.",
      about:
        "Adults 10,00 € Children 5,00 €  (children 2 to 14 years) You can either buy tickets directly at the station or at the ticket agency at: Tourist-Information Rathausplatz, Altes Rathaus, Regensburg, Phone +49 941 5074412 Online-Ticket are available directly on our homepage. The ticket includes a voucher for a cup of filter coffee, which can alternatively be used as a voucher for 1.50 € for other consumption (no repayment in cash). This voucher is valid at Regensburger Weissbräuhaus, Schwarze-Bären-Straße 6, 93047 Regensburg.",
      contact:
        "Regensburger Stadtrundfahrten GmbH Posthorngässchen 6 93047 Regensburg Tel. +49 9415959177 Fax +49 94016079999 E.mail: info@city-tour.info",
      faq: "fffffffffff",
    },
  };

  render() {
    return (
      <div className="tab-content" id="myTabContent">
        <section
          className="tab-pane fade show active"
          id="home-tab-pane"
          role="tabpanel"
          aria-labelledby="home-tab"
          tabIndex="0"
        >
          <h3>{this.state.title.home}</h3>
          <p>{this.state.content.home}</p>
        </section>
        <section
          className="tab-pane fade"
          id="about-tab-pane"
          role="tabpanel"
          aria-labelledby="about-tab"
          tabIndex="0"
        >
          <h3>{this.state.title.about}</h3>
          <p>{this.state.content.about}</p>
        </section>
        <section
          className="tab-pane fade"
          id="contact-tab-pane"
          role="tabpanel"
          aria-labelledby="contact-tab"
          tabIndex="0"
        >
          <h3>{this.state.title.contact}</h3>
          <p>{this.state.content.contact}</p>
        </section>
        <section
          className="tab-pane fade"
          id="faq-tab-pane"
          role="tabpanel"
          aria-labelledby="faq-tab"
          tabIndex="0"
        >
          <h3>{this.state.title.faq}</h3>
          <p>{this.state.content.faq}</p>
        </section>
      </div>
    );
  }
}

export default Content;
