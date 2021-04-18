import { PricingTable, PricingSlot, PricingDetail } from "react-pricing-table";

import React, { Component } from "react";

import Country from "./Country";

import Month from './Month';
import "./App.css";
var data = [
  {
    country: "Indian",
    pricing: [
      {
        monthly: [
          {
            amount: 999,
            link: "https://pages.razorpay.com/pl_FQGl2gxtSaPBA3/view",
          },
          {
            amount: 3499,
            link: "https://pages.razorpay.com/pl_FsOtdNMnF52QEB/view",
          },
          {
            amount: 9999,
            link: "https://pages.razorpay.com/pl_FsOvkFfWW9wypz/view",
          },
        ],
      },
      {
        yearly: [
          {
            amount: 7999,
            link: "https://pages.razorpay.com/pl_FNtph373eQQStf/view",
          },
          {
            amount: 24999,
            link: "https://pages.razorpay.com/pl_FoMka5NOrwYaaY/view",
          },
          {
            amount: 74999,
            link: "https://pages.razorpay.com/pl_FdbC9S2Vxz7OVc/view",
          },
        ],
      },
    ],
  },
  {
    country: "International",
    pricing: [
      {
        monthly: [
          {
            amount: 19,
            link:
              "https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-0J746010T0763860HL56Z63Y",
          },
          {
            amount: 69,
            link:
              "https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-02D50388773262640L6JQC7Q",
          },
          {
            amount: 199,
            link:
              "https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-74J704694K419812DL6JQEDQ",
          },
        ],
      },
      {
        yearly: [
          {
            amount: 149,
            link:
              "https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-0J746010T0763860HL56Z63Y",
          },
          {
            amount: 499,
            link:
              "https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-1172268957931530LL6JQFIQ",
          },
          {
            amount: 1499,
            link:
              "https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-3F113702AR560560AL6JQGFQ",
          },
        ],
      },
    ],
  },
];

export default class Pricing extends Component {
  constructor(props) {
    super(props);

    this.state = {
        CountrySelectedIndex: 0,
        MonthSelectedIndex:0,
      Monthtabs: ["Monthly", "Yearly"],
      Countrytabs: ["India", "International"],
    };
  }
  updateCountry= index=>{
    this.setState({CountrySelectedIndex:index})// or with es6 this.setState({name})
 }

 updateMonth=index=>{
    this.setState({MonthSelectedIndex:index})// or with es6 this.setState({name})
 }
  render() {
    return (
      <div>
       hi
      </div>
    );
  }
}
