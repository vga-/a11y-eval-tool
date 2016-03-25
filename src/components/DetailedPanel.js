import React, { PropTypes } from 'react';
import { DetailedSummaryTable, DetailedSubPanel } from '../components';
import { Panel, PanelGroup } from 'react-bootstrap-15';
import map from 'lodash.map';

const DetailedPanel = ({ data }) => (
  <Panel collapsible defaultExpanded header={<h2>Detailed Report</h2>}>
    {map(data, (item) =>
      <PanelGroup key={data.indexOf(item)}>
        <Panel header={<h3><a href={`//${item.entry}`} target="_blank">{item.entry}</a></h3>}>
          {/* TODO refactor this, map categories to subpanels */}
          <DetailedSummaryTable entry={item.entry} categories={item.data.categories} />
          <Panel collapsible header={`Detailed report for ${item.entry}`}>
            <DetailedSubPanel
              style="danger"
              header={<h4>Errors: {item.data.categories.error.count}</h4>}
              caption={`Errors for ${item.entry}`}
              data={item.data.categories.error}
            />
            <DetailedSubPanel
              style="warning"
              header={<h4>Alerts: {item.data.categories.alert.count}</h4>}
              caption={`Alerts for ${item.entry}`}
              data={item.data.categories.alert}
            />
            <DetailedSubPanel
              style="success"
              header={<h4>Features: {item.data.categories.feature.count}</h4>}
              caption={`Features for ${item.entry}`}
              data={item.data.categories.feature}
            />
            <DetailedSubPanel
              style="info"
              header={<h4>Structure: {item.data.categories.structure.count}</h4>}
              caption={`Structure items for ${item.entry}`}
              data={item.data.categories.structure}
            />
            <DetailedSubPanel
              id={`bs-html5-${data.indexOf(item)}`}
              header={<h4>HTML5 & ARIA: {item.data.categories.html5.count}</h4>}
              caption={`HTML5 and ARIA items for ${item.entry}`}
              data={item.data.categories.html5}
            />
            <DetailedSubPanel
              id={`bs-contrast-${data.indexOf(item)}`}
              header={<h4>Contrast: {item.data.categories.contrast.count}</h4>}
              caption={`Contrast items for ${item.entry}`}
              data={item.data.categories.contrast}
            />
          </Panel>
        </Panel>
      </PanelGroup>
    )}
  </Panel>
);

DetailedPanel.propTypes = {
  data: PropTypes.array.isRequired,
};

export default DetailedPanel;
