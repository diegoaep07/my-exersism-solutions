//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const format = (name, number) => {
  const num_end = String(number).slice(-2)
  let ordinal = ''

  if ( num_end.slice(-1) === '1' && num_end !== '11' ) {
    ordinal = 'st'
  } else if ( num_end.slice(-1) === '2' && num_end !== '12' ) {
    ordinal = 'nd'
  } else if ( num_end.slice(-1) === '3' && num_end !== '13') {
    ordinal = 'rd'
  } else {
    ordinal = 'th'
  }
  
  let sentence = `${name}, you are the ${number}${ordinal} customer we serve today. Thank you!`

  return sentence
};
