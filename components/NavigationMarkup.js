import React from "react";
import { Navigation } from "@shopify/polaris";
import {
  HomeMajor,
  OnlineStoreMajor,
  OrdersMajor,
  ProductsMajor,
} from "@shopify/polaris-icons";

export default navigationMarkup = () => {
  return (
    <Navigation location="/">
      <Navigation.Section
        items={[
          {
            label: "Back to Shopify",
            icon: ArrowLeftMinor,
          },
        ]}
      />
      <Navigation.Section
        separator
        title="Tuskinink"
        items={[
          {
            label: "Dashboard",
            icon: HomeMajor,
            onClick: toggleIsLoading,
          },
          {
            label: "Your Orders",
            icon: OrdersMajor,
            onClick: toggleIsLoading,
          },
          {
            label: "App Setting",
            icon: OrdersMajor,
            onClick: toggleIsLoading,
          },
          {
            label: "Privacy",
            icon: OrdersMajor,
            onClick: toggleIsLoading,
          },
        ]}
        action={{
          icon: ConversationMinor,
          accessibilityLabel: "Contact support",
          onClick: toggleModalActive,
        }}
      />
    </Navigation>
  );
};
