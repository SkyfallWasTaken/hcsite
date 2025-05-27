import base from '@hackclub/theme'
import { merge } from 'lodash'

const theme = base

theme.config.useColorSchemeMediaQuery = false

// Add new specific colors and cyberpunk colors
theme.colors = merge(theme.colors, {
  titleBrown: '#552200', // For main hero title
  subtitleGrey: '#6c757d', // For hero subtitle
  hcRed: '#ec3750',       // Hack Club red, for buttons and stats
  statGreen: '#33d6a6',    // Green for stats highlight
  statPurple: '#8A2BE2',   // Purple for stats highlight (neonPurple)
  hackathonBannerBg: '#FEF7C3', // Yellow background for hackathon banner
  hackathonBannerText: '#343A40', // Dark text for hackathon banner
  hackathonButtonBg: '#343A40',   // Dark background for "Sign Up Now" button
  hackathonButtonText: '#ffffff', // White text for "Sign Up Now" button
  cyberpunk: {
    darkBg: '#fbfaf9',
    darkerBg: '#05081A',
    text: '#552200',
    textInverted: '#fbfaf9',
    textForeground: 'rgba(0, 0, 0, 0.9)',
    textMuted: '#552200',
    textHighlight: '#552200',
    electricBlue: '#00BFFF',
    magenta: '#F002ED',
    neonPurple: '#8A2BE2',
    gridLine: 'rgba(120, 170, 255, 0.07)',
    gridLineLarge: 'rgba(120, 170, 255, 0.04)',
    ctaPrimary: '#8A2BE2',
    ctaGradient: 'linear-gradient(to right, #00BFFF, #8A2BE2)',
    ctaHover: 'linear-gradient(to right, #33D6FF, #9B4BF5)',
    inputBackground: '#313244',
    cards: {
      translucentDark: "#AFDAAD"
    },
    subtitle: {
      text: '#fbfaf9'
    }
  },
})

theme.buttons = merge(theme.buttons, {
  primary: {
    transform: 'scale(1)',
    transformOrigin: 'center !important',
    transition: 'transform 0.2s ease-in-out',
    '&:hover': {
      transformOrigin: 'center !important',
      transform: 'scale(1.05) !important'
    },
  },
});

// Add layout variants for inverted sections
theme.layout = merge(theme.layout, {
  invertedSection: {
    color: 'cyberpunk.textInverted',
    '& h1, & h2, & h3, & h4, & h5, & h6': {
      color: 'cyberpunk.textInverted !important'
    },
    '& p, & span, & div, & li': {
      color: 'cyberpunk.textInverted !important'
    },
    '& a': {
      color: 'cyberpunk.electricBlue !important'
    },
    '& strong': {
      color: 'cyberpunk.textInverted !important'
    },
    // Target common theme-ui Text components
    '& [data-theme-ui="text"]': {
      color: 'cyberpunk.textInverted !important'
    }
  }
})

theme.layout.copy.maxWidth = ['100%', '100%', 'copyPlus']

export default theme