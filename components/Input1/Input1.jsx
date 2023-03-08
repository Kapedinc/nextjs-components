/**********************************************************************
 *
 *   Component generated by Quest
 *
 *   WARNING: By editing this component by hand, you will lose the ability to regenerate the code without conflicts.
 *   To preseve that abilty, always export from Quest to regenerate this file.
 *   To setup props, bindings and actions, use the Quest editor
 *   Code Logic goes in the hook associated with this component
 *
 *   For help and further details refer to: https://www.quest.ai/docs
 *
 *
 **********************************************************************/

import React from 'react';
import { styled } from '@mui/material/styles';

const StateDefault = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  width: '100%',
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  height: 'auto',
});

const Email = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(73, 80, 87, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `13px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `16px`,
  textTransform: `none`,
  alignSelf: `stretch`,
  margin: `0px`,
}));

const Input2 = styled('div')({
  border: `1px solid rgba(233, 236, 239, 1)`,
  boxSizing: `border-box`,
  borderRadius: `20px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `10px 14px`,
  alignSelf: `stretch`,
  margin: `8px 0px 0px 0px`,
});

const Placeholder = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(173, 181, 189, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `20px`,
  textTransform: `none`,
  margin: `0px`,
}));

const Placeholder1 = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(33, 37, 41, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `20px`,
  textTransform: `none`,
  margin: `0px 0px 0px 10px`,
}));

const Placeholder2 = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(33, 37, 41, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `20px`,
  textTransform: `none`,
  margin: `0px 0px 0px 10px`,
}));

const Placeholder3 = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(206, 212, 218, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `20px`,
  textTransform: `none`,
  margin: `0px 0px 0px 10px`,
}));

const Placeholder4 = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(33, 37, 41, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `20px`,
  textTransform: `none`,
  margin: `0px 0px 0px 10px`,
}));

const HeroiconsMiniExclaim = styled('img')({
  height: `auto`,
  width: `20px`,
  margin: `0px 0px 0px 10px`,
});

const Placeholder5 = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(33, 37, 41, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `500`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `20px`,
  textTransform: `none`,
  margin: `0px 0px 0px 10px`,
}));

const HeroiconsMiniChevron = styled('img')({
  height: `auto`,
  width: `20px`,
  margin: `0px 0px 0px 10px`,
});

const ThisIsAHelper = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(134, 142, 150, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `11px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `14px`,
  textTransform: `none`,
  alignSelf: `stretch`,
  margin: `8px 0px 0px 0px`,
}));

function Input1(props) {
  return (
    <StateDefault className={props.className}>
      <Email>{`Email`}</Email>
      <Input2>
        <Placeholder>{`Placeholder`}</Placeholder>
        {false && <Placeholder1>{`Placeholder`}</Placeholder1>}
        {false && <Placeholder2>{`Placeholder`}</Placeholder2>}
        {false && <Placeholder3>{`Placeholder`}</Placeholder3>}
        {false && <Placeholder4>{`Placeholder`}</Placeholder4>}
        {false && (
          <HeroiconsMiniExclaim
            src={`assets/images/Input_heroicons_mini_exclaimation_circle.svg`}
            loading="lazy"
            alt={'heroicons-mini/exclaimation-circle'}
          />
        )}
        {false && <Placeholder5>{`Placeholder`}</Placeholder5>}
        {false && (
          <HeroiconsMiniChevron
            src={`assets/images/Input_heroicons_mini_chevron_down.svg`}
            loading="lazy"
            alt={'heroicons-mini/chevron-down'}
          />
        )}
      </Input2>
      <ThisIsAHelper>{`This is a helper`}</ThisIsAHelper>
    </StateDefault>
  );
}

export default Input1;
