import React from 'react';
import Input from 'antd/lib/input';

import './styles.css';

export const CreateAccountFormContent = () => {
  return (
    <React.Fragment>
      <h1 className="sectionTitle">Great, let's get your rates</h1>
      <form className="onboard-form">
        <div className="formGroup">
          <Input type="text" placeholder="Email address" className="input" />
        </div>
        <div className="formGroup">
          <Input
            type="password"
            placeholder="Create a password"
            className="input"
          />
        </div>
      </form>
    </React.Fragment>
  );
};
