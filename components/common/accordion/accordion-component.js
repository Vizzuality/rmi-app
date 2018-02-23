import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody
} from 'react-accessible-accordion';

class CompaniesDetailAccordion extends PureComponent {
  static propTypes = {
    data: PropTypes.array.isRequired,
    contentRenderer: PropTypes.func.isRequired
  }

  renderAccordionItem(data) {
    const { name, id } = data || {};
    const { contentRenderer } = this.props;

    return (
      <AccordionItem key={id}>
        <AccordionItemTitle>
          <h3 className="category-name">{name}</h3>
        </AccordionItemTitle>
        <AccordionItemBody>
          {contentRenderer(data.children)}
        </AccordionItemBody>
      </AccordionItem>
    );
  }
  render() {
    const { data } = this.props;

    return (
      <div className="c-accordion">
        <Accordion>
          {data.map(d => this.renderAccordionItem(d))}
        </Accordion>
      </div>
    );
  }
}

export default CompaniesDetailAccordion;
