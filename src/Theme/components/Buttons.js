import { StyleSheet } from 'react-native'

export default function ({ Colors, Gutters, Layout }) {
  const base = {
    ...Layout.center,
    ...Gutters.largeHPadding,
    height: 60,
    backgroundColor: Colors.primary,
  }
  const rounded = {
    ...base,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  }

  return StyleSheet.create({
    base,
    rounded,
    outline: {
      ...base,
      backgroundColor: Colors.transparent,
      borderWidth: 2,
      borderColor: Colors.primary,
    },
    outlineRounded: {
      ...rounded,
      backgroundColor: Colors.transparent,
      borderWidth: 2,
      borderColor: Colors.primary,
    },
  })
}
