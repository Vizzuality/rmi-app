import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody
} from 'react-accessible-accordion';

// styles
import styles from './accordion-styles.scss';

class CompaniesDetailAccordion extends PureComponent {
  static propTypes = {
    data: PropTypes.array.isRequired,
    accordion: PropTypes.bool,
    contentRenderer: PropTypes.func.isRequired
  }

  static defaultProps = { accordion: true }

  renderAccordionItem(data) {
    const { name, id } = data || {};
    const { contentRenderer, accordion } = this.props;

    return (
      <AccordionItem key={id} expanded={!accordion}>
        <style jsx>{styles}</style>
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
    const { data, accordion } = this.props;

    return (
      <div className="c-accordion" accordion={accordion}>
        <style jsx>{styles}</style>
        <Accordion accordion={false}>
          {data.map(d => this.renderAccordionItem(d))}
        </Accordion>
      </div>
    );
  }
}

export default CompaniesDetailAccordion;
