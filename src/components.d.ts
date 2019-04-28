/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';

import '@stencil/router';
import '@stencil/state-tunnel';
import {
  MatchResults,
} from '@stencil/router';


export namespace Components {

  interface PtcHome {}
  interface PtcHomeAttributes extends StencilHTMLAttributes {}

  interface PtcLogo {}
  interface PtcLogoAttributes extends StencilHTMLAttributes {}

  interface PtcProfile {
    'match': MatchResults;
  }
  interface PtcProfileAttributes extends StencilHTMLAttributes {
    'match'?: MatchResults;
  }

  interface PtcRoot {}
  interface PtcRootAttributes extends StencilHTMLAttributes {}
}

declare global {
  interface StencilElementInterfaces {
    'PtcHome': Components.PtcHome;
    'PtcLogo': Components.PtcLogo;
    'PtcProfile': Components.PtcProfile;
    'PtcRoot': Components.PtcRoot;
  }

  interface StencilIntrinsicElements {
    'ptc-home': Components.PtcHomeAttributes;
    'ptc-logo': Components.PtcLogoAttributes;
    'ptc-profile': Components.PtcProfileAttributes;
    'ptc-root': Components.PtcRootAttributes;
  }


  interface HTMLPtcHomeElement extends Components.PtcHome, HTMLStencilElement {}
  var HTMLPtcHomeElement: {
    prototype: HTMLPtcHomeElement;
    new (): HTMLPtcHomeElement;
  };

  interface HTMLPtcLogoElement extends Components.PtcLogo, HTMLStencilElement {}
  var HTMLPtcLogoElement: {
    prototype: HTMLPtcLogoElement;
    new (): HTMLPtcLogoElement;
  };

  interface HTMLPtcProfileElement extends Components.PtcProfile, HTMLStencilElement {}
  var HTMLPtcProfileElement: {
    prototype: HTMLPtcProfileElement;
    new (): HTMLPtcProfileElement;
  };

  interface HTMLPtcRootElement extends Components.PtcRoot, HTMLStencilElement {}
  var HTMLPtcRootElement: {
    prototype: HTMLPtcRootElement;
    new (): HTMLPtcRootElement;
  };

  interface HTMLElementTagNameMap {
    'ptc-home': HTMLPtcHomeElement
    'ptc-logo': HTMLPtcLogoElement
    'ptc-profile': HTMLPtcProfileElement
    'ptc-root': HTMLPtcRootElement
  }

  interface ElementTagNameMap {
    'ptc-home': HTMLPtcHomeElement;
    'ptc-logo': HTMLPtcLogoElement;
    'ptc-profile': HTMLPtcProfileElement;
    'ptc-root': HTMLPtcRootElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
