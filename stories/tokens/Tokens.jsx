import React from 'react';
import './tokens.css';

export const Tokens = () => {
  return (
    <div className="tokens">
      <h2>Kleuren</h2>
      <div className="ds-tokens__group">
        <Token name="--color-primary" />
        <Token name="--color-secondary" />
        <Token name="--color-border" />
        <Token name="--color-text" />
      </div>

      <h2>Spacing</h2>
      <div className="ds-tokens__group">
        <Spacing name="--space-xs" />
        <Spacing name="--space-sm" />
        <Spacing name="--space-md" />
        <Spacing name="--space-lg" />
      </div>

      <h2>Typografie</h2>
      <div className="ds-tokens__group">
        <Typography name="--font-size-sm" />
        <Typography name="--font-size-md" />
        <Typography name="--font-size-lg" />
      </div>
    </div>
  );
};

const Token = ({ name }) => (
  <div className="ds-tokens__item">
    <div className='ds-token__example'>
      <div className="ds-token__swatch" style={{ backgroundColor: `var(${name})` }} />
    </div>
    <code>{name}</code>
  </div>
);

const Spacing = ({ name }) => (
  <div className="ds-tokens__item">
    <div className="ds-token__spacing" style={{ height: `var(${name})` }} />
    <code>{name}</code>
  </div>
);

const Typography = ({ name }) => (
  <div className="ds-tokens__item">
    <p style={{ fontSize: `var(${name})` }}>Aa</p>
    <code>{name}</code>
  </div>
);