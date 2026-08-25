/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export const cookingStatus = ( timer ) => {
  if ( timer === 0 ) {
    return 'Lasagna is done.'
  }
  else if( !timer ){
    return 'You forgot to set the timer.'
  }
  else{
    return 'Not done, please wait.'
  }
}

export const preparationTime = ( layers, time = 2 ) => {
  return layers.length*time
}

export const quantities = ( layers ) => {
  let sauce = 0
  let noodles = 0

  for( let i = 0; i<=layers.length; i++ ){
    console.log(layers[i], sauce, noodles)
    if( layers[i] == 'sauce' ){
      sauce+=0.2
    }
    else if( layers[i] == 'noodles' ){
      noodles+=50
    }
  }

  return { 'noodles': noodles,
           'sauce': sauce }
}

export const addSecretIngredient = ( friendsList, myList ) => {

  myList.push(friendsList[friendsList.length - 1])
  
}

export const scaleRecipe = ( original, portions ) => {
  let scaled = {
    
  }
  
  for (let ingredient in original) {
    scaled[ingredient] = original[ingredient] * portions/2
  }
  
  return scaled
}