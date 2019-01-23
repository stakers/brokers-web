/* eslint-disable  import/no-unresolved */

import React, { Component } from 'react';
import FilterPanel from '../FilterPanel';
import SelectedFilters from '../../containers/SelectedFilters';
import * as filterTypes from '../../constants/filterTypes';

class FilterArea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedChoices: []
    };
  }

  selectFilter = value => {
    const selectedChoices = this.state.selectedChoices;
    const choiceSelectedIndex = selectedChoices.findIndex(
      choice => choice === value
    );
    if (choiceSelectedIndex > -1) {
      selectedChoices.splice(choiceSelectedIndex, 1);
      this.setState({
        selectedChoices: [...selectedChoices]
      });
    } else {
      this.setState({
        selectedChoices: [...selectedChoices, value]
      });
    }
  };

  removeChoice = value => {
    const selectedChoices = this.state.selectedChoices;
    const index = selectedChoices.findIndex(choice => choice === value);
    selectedChoices.splice(index, 1);
    this.setState({
      selectedChoices: [...selectedChoices]
    });
  };

  render() {
    const { selectedChoices } = this.state;
    return (
      <div>
        {selectedChoices.length > 0 && (
          <SelectedFilters
            selectedChoices={selectedChoices}
            removeChoice={this.removeChoice}
          />
        )}

        <FilterPanel
          title="Currency"
          choices={filterTypes.currencies}
          opened={true}
          gutter="16px"
          selectFilter={this.selectFilter}
          selectedChoices={selectedChoices}
        />
        <FilterPanel
          title="Loan Type"
          choices={filterTypes.loanTypes}
          opened={true}
          gutter="16px"
          selectFilter={this.selectFilter}
          selectedChoices={selectedChoices}
        />
        <FilterPanel
          title="Country"
          choices={filterTypes.countries}
          opened={true}
          gutter="16px"
          selectFilter={this.selectFilter}
          selectedChoices={selectedChoices}
        />
        <FilterPanel
          title="Loan Originator"
          choices={filterTypes.loanOriginators}
          opened={true}
          gutter="16px"
          selectFilter={this.selectFilter}
          selectedChoices={selectedChoices}
        />
        <FilterPanel
          title="Ratings"
          choices={filterTypes.ratings}
          opened={true}
          gutter="16px"
          selectFilter={this.selectFilter}
          selectedChoices={selectedChoices}
        />
        <FilterPanel
          title="Buyback Guarantee"
          choices={filterTypes.buybackGurantee}
          opened={false}
          gutter="16px"
          selectFilter={this.selectFilter}
          selectedChoices={selectedChoices}
        />
        <FilterPanel
          title="Status"
          choices={filterTypes.status}
          opened={false}
          gutter="16px"
          selectFilter={this.selectFilter}
          selectedChoices={selectedChoices}
        />
        <FilterPanel
          title="Status"
          choices={filterTypes.investmentStructure}
          opened={false}
          gutter="16px"
          selectFilter={this.selectFilter}
          selectedChoices={selectedChoices}
        />
        <FilterPanel
          title="Status"
          choices={filterTypes.amortizationMethod}
          opened={false}
          gutter="16px"
          selectFilter={this.selectFilter}
          selectedChoices={selectedChoices}
        />
        <FilterPanel
          title="Status"
          choices={filterTypes.myInvestments}
          opened={false}
          selectFilter={this.selectFilter}
          selectedChoices={selectedChoices}
        />
      </div>
    );
  }
}

export default FilterArea;
