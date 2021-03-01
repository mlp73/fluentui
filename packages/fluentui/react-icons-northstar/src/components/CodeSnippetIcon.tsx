import * as React from 'react';
import cx from 'classnames';
import { createSvgIcon } from '../utils/createSvgIcon';
import { iconClassNames } from '../utils/iconClassNames';

export const CodeSnippetIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg role="presentation" focusable="false" className={classes.svg} viewBox="2 2 16 16">
      <g className={cx(iconClassNames.outline, classes.outlinePart)}>
        <path d="M12.9667 3.6795C13.0658 3.42177 12.9372 3.13247 12.6795 3.03334C12.4218 2.93421 12.1325 3.06279 12.0333 3.32052L7.03334 16.3205C6.93421 16.5783 7.06279 16.8676 7.32052 16.9667C7.57826 17.0658 7.86756 16.9372 7.96669 16.6795L12.9667 3.6795Z" />
        <path d="M5.8254 6.12038C6.03506 6.30009 6.05934 6.61574 5.87963 6.8254L3.15854 10L5.87963 13.1746C6.05934 13.3843 6.03506 13.6999 5.8254 13.8796C5.61573 14.0593 5.30008 14.0351 5.12037 13.8254L2.12037 10.3254C1.95988 10.1382 1.95988 9.86186 2.12037 9.67461L5.12037 6.17461C5.30008 5.96495 5.61573 5.94067 5.8254 6.12038Z" />
        <path d="M14.1746 14.3796C13.9649 14.1999 13.9407 13.8843 14.1204 13.6746L16.8415 10.5L14.1204 7.32539C13.9407 7.11572 13.9649 6.80007 14.1746 6.62036C14.3843 6.44065 14.6999 6.46493 14.8796 6.6746L17.8796 10.1746C18.0401 10.3618 18.0401 10.6381 17.8796 10.8254L14.8796 14.3254C14.6999 14.535 14.3843 14.5593 14.1746 14.3796Z" />
      </g>
      <g className={cx(iconClassNames.filled, classes.filledPart)}>
        <path d="M12.9365 4.052C13.1033 3.67286 12.9312 3.23028 12.5521 3.06346C12.1729 2.89664 11.7303 3.06875 11.5635 3.44789L6.06352 15.9479C5.8967 16.327 6.06882 16.7696 6.44795 16.9364C6.82709 17.1033 7.26967 16.9311 7.43649 16.552L12.9365 4.052Z" />
        <path d="M14.2927 13.8444C13.9644 13.5919 13.903 13.121 14.1555 12.7927L16.3038 9.99996L14.1555 7.20725C13.903 6.87893 13.9644 6.40805 14.2927 6.15549C14.621 5.90294 15.0919 5.96436 15.3445 6.29268L17.8445 9.54268C18.0518 9.81227 18.0518 10.1877 17.8445 10.4572L15.3445 13.7072C15.0919 14.0356 14.621 14.097 14.2927 13.8444Z" />
        <path d="M5.70728 6.15557C6.0356 6.40812 6.09702 6.879 5.84447 7.20732L3.69622 10L5.84447 12.7928C6.09702 13.1211 6.0356 13.592 5.70728 13.8445C5.37897 14.0971 4.90808 14.0356 4.65553 13.7073L2.15553 10.4573C1.94816 10.1877 1.94816 9.81234 2.15553 9.54275L4.65553 6.29275C4.90808 5.96444 5.37897 5.90302 5.70728 6.15557Z" />
      </g>
    </svg>
  ),
  displayName: 'CodeSnippetIcon',
});