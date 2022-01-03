import React, { useCallback, useState } from "react";
import { Card, Tabs } from "@shopify/polaris";

export default function FittedTabsExample() {
  const [selected, setSelected] = useState(0);

  const handleTabChange = useCallback(
    (selectedTabIndex) => setSelected(selectedTabIndex),
    []
  );

  const tabs = [
    {
      id: "all-customers-fitted-2",
      content: "All",
      accessibilityLabel: "All Products",
      panelID: "all-customers-fitted-content-2",
    },
    {
      id: "accepts-marketing-fitted-2",
      content: "Electronics",
      panelID: "accepts-marketing-fitted-Ccontent-2",
    },
    {
      id: "repeat-customers-4",
      content: "Fashion",
      panelID: "repeat-customers-content-4",
    },
    {
      id: "prospects-4",
      content: "Essentials",
      panelID: "prospects-content-4",
    },
  ];

  return (
    <Card>
      <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange} fitted>
        <Card.Section title={tabs[selected].content}>
          <p>Tab {selected} selected</p>
        </Card.Section>
      </Tabs>
    </Card>
  );
}
