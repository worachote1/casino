import $ from 'jquery'

import roulette_bets_european from './img/roulette/roulette_bets_european.png'
import roulette_bets_american from './img/roulette/roulette_bets_american.png'
import roulette_bets_european_small from './img/roulette/roulette_bets_european_small.png'
import roulette_bets_american_small from './img/roulette/roulette_bets_american_small.png'

import card_back from './img/blackjack/cards/back.png'
import card_0 from './img/blackjack/cards/card_0.png'
import card_1 from './img/blackjack/cards/card_1.png'
import card_2 from './img/blackjack/cards/card_2.png'
import card_3 from './img/blackjack/cards/card_3.png'
import card_4 from './img/blackjack/cards/card_4.png'
import card_5 from './img/blackjack/cards/card_5.png'
import card_6 from './img/blackjack/cards/card_6.png'
import card_7 from './img/blackjack/cards/card_7.png'
import card_8 from './img/blackjack/cards/card_8.png'
import card_9 from './img/blackjack/cards/card_9.png'
import card_10 from './img/blackjack/cards/card_10.png'
import card_11 from './img/blackjack/cards/card_11.png'
import card_12 from './img/blackjack/cards/card_12.png'
import card_13 from './img/blackjack/cards/card_13.png'
import card_14 from './img/blackjack/cards/card_14.png'
import card_15 from './img/blackjack/cards/card_15.png'
import card_16 from './img/blackjack/cards/card_16.png'
import card_17 from './img/blackjack/cards/card_17.png'
import card_18 from './img/blackjack/cards/card_18.png'
import card_19 from './img/blackjack/cards/card_19.png'
import card_20 from './img/blackjack/cards/card_20.png'
import card_21 from './img/blackjack/cards/card_21.png'
import card_22 from './img/blackjack/cards/card_22.png'
import card_23 from './img/blackjack/cards/card_23.png'
import card_24 from './img/blackjack/cards/card_24.png'
import card_25 from './img/blackjack/cards/card_25.png'
import card_26 from './img/blackjack/cards/card_26.png'
import card_27 from './img/blackjack/cards/card_27.png'
import card_28 from './img/blackjack/cards/card_28.png'
import card_29 from './img/blackjack/cards/card_29.png'
import card_30 from './img/blackjack/cards/card_30.png'
import card_31 from './img/blackjack/cards/card_31.png'
import card_32 from './img/blackjack/cards/card_32.png'
import card_33 from './img/blackjack/cards/card_33.png'
import card_34 from './img/blackjack/cards/card_34.png'
import card_35 from './img/blackjack/cards/card_35.png'
import card_36 from './img/blackjack/cards/card_36.png'
import card_37 from './img/blackjack/cards/card_37.png'
import card_38 from './img/blackjack/cards/card_38.png'
import card_39 from './img/blackjack/cards/card_39.png'
import card_40 from './img/blackjack/cards/card_0.png'
import card_41 from './img/blackjack/cards/card_41.png'
import card_42 from './img/blackjack/cards/card_42.png'
import card_43 from './img/blackjack/cards/card_43.png'
import card_44 from './img/blackjack/cards/card_44.png'
import card_45 from './img/blackjack/cards/card_45.png'
import card_46 from './img/blackjack/cards/card_46.png'
import card_47 from './img/blackjack/cards/card_47.png'
import card_48 from './img/blackjack/cards/card_48.png'
import card_49 from './img/blackjack/cards/card_49.png'
import card_50 from './img/blackjack/cards/card_50.png'
import card_51 from './img/blackjack/cards/card_51.png'

import item_image from './img/icons/vegetables_color.png'

import craps_bets from './img/craps/craps.png'

import 	craps_pass_line from './img/craps/hover/craps_pass_line.png'
import 	craps_dont_pass_line from './img/craps/hover/craps_dont_pass_line.png'
import 	craps_come from './img/craps/hover/craps_come.png'
import 	craps_dont_come from './img/craps/hover/craps_dont_come.png'
import 	craps_place_4 from './img/craps/hover/craps_place_4.png'
import 	craps_place_5 from './img/craps/hover/craps_place_5.png'
import 	craps_place_6 from './img/craps/hover/craps_place_6.png'
import 	craps_place_8 from './img/craps/hover/craps_place_8.png'
import 	craps_place_9 from './img/craps/hover/craps_place_9.png'
import 	craps_place_10 from './img/craps/hover/craps_place_10.png'
import 	craps_field_2 from './img/craps/hover/craps_field_2.png'
import 	craps_field_3 from './img/craps/hover/craps_field_3.png'
import 	craps_field_4 from './img/craps/hover/craps_field_4.png'
import 	craps_field_9 from './img/craps/hover/craps_field_9.png'
import 	craps_field_10 from './img/craps/hover/craps_field_10.png'
import 	craps_field_11 from './img/craps/hover/craps_field_11.png'
import 	craps_field_12 from './img/craps/hover/craps_field_12.png'
import 	craps_6_big_8 from './img/craps/hover/craps_6_big_8.png'
import 	craps_seven from './img/craps/hover/craps_seven.png'
import 	craps_hardway_1 from './img/craps/hover/craps_hardway_1.png'
import 	craps_hardway_2 from './img/craps/hover/craps_hardway_2.png'
import 	craps_hardway_3 from './img/craps/hover/craps_hardway_3.png'
import 	craps_hardway_4 from './img/craps/hover/craps_hardway_4.png'
import 	craps_one_roll_1 from './img/craps/hover/craps_one_roll_1.png'
import 	craps_one_roll_2 from './img/craps/hover/craps_one_roll_2.png'
import 	craps_one_roll_3 from './img/craps/hover/craps_one_roll_3.png'
import 	craps_one_roll_4 from './img/craps/hover/craps_one_roll_4.png'
import 	craps_any_craps from './img/craps/hover/craps_any_craps.png'

import keno_dirt_01 from './img/keno/keno_dirt_01.png'

import { popup_info } from './actions/actions'

export const isEmpty = function (element){
  let empty = true
  if(typeof element !== "undefined" && element !== 'null' && element !== null && element !== ''){
    empty = false
  }
  return empty
}

export const formatDate = function(date){	
  let d = new Date(date)
  let dateString = new Date(d.getTime() - (d.getTimezoneOffset() * 60000 )).toISOString().split(".")[0].replace(/T/g, " ").replace(/-/g, "/")
  return dateString
}

export const checkWinterMonths = function(){
  let winter = false
  const d = new Date()
  if(d.getMonth() === 0 || d.getMonth() === 1 || d.getMonth() === 11){
      winter = true
  }
  return winter
}
export const checkChristmas = function(){ // one week before and after christmas
  let christmas = false
  let d = new Date()

  let date_from = new Date()
  date_from.setDate(25)
  date_from.setMonth(11)
  date_from.setDate(date_from.getDate() - 7)

  let date_to = new Date()
  date_to.setDate(25)
  date_to.setMonth(11)
  date_to.setDate(date_to.getDate() + 7)

  if(d >= date_from && d <= date_to){
    christmas = true
  }

  return christmas
}

export const checkEaster = function(){
  let easter = false
  const d = new Date()

  let date_from = Easter(d.getFullYear()) // 3 days before the catholic easter
  date_from.setDate(date_from.getDate() - 3)

  let date_to = Easter(d.getFullYear())
  date_to.setDate(date_to.getDate() + 10) //3 days to get to ortodox easter and one more week

  if(d >= date_from && d <= date_to){
    easter = true
  }

  return easter
}

function Easter(Y) {
  var C = Math.floor(Y/100)
  var N = Y - 19*Math.floor(Y/19)
  var K = Math.floor((C - 17)/25)
  var I = C - Math.floor(C/4) - Math.floor((C - K)/3) + 19*N + 15
  I = I - 30*Math.floor((I/30))
  I = I - Math.floor(I/28)*(1 - Math.floor(I/28)*Math.floor(29/(I + 1))*Math.floor((21 - N)/11))
  var J = Y + Math.floor(Y/4) + I + 2 - C + Math.floor(C/4)
  J = J - 7*Math.floor(J/7)
  var L = I - J
  var M = 3 + Math.floor((L + 40)/44)
  var D = L + 28 - 31*Math.floor(M/4)

  let d = new Date()
  d.setDate(D)
  d.setMonth(M-1)
  return d
}

export const setCookie = function (cname, cvalue, hours=12){
  let d = new Date()
  d.setTime(d.getTime() + (hours * 60 * 60 * 1000))
  let expires = "expires=" + d.toGMTString()
  if(getCookie("casino_cookies") === "true"){
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"
  } else {
    if(cname === "casino_uuid" || cname === "casino_cookies" || cname === "casino_streak"){
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"
    }
  }
}
export const getCookie = function (cname){
  let name = cname + "="
  let decodedCookie = decodeURIComponent(document.cookie)
  let ca = decodedCookie.split(';')
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) === ' ') {
      c = c.substring(1)
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length)
    }
  }
  return ""
}

export const bigText = function(payload) {
  let text = `<div class="big_text_container">
    <div class="big_text">${payload}</div>
  </div>`
  return text
}

export const sort = function(list=[], sort_by="", asc=true) {
  if(list && list.length>0){
    if(sort_by === ""){
      let done = false
      if(asc){
        while (!done) {
          done = true
          for (let i = 1; i < list.length; i += 1) {
              if (list[i - 1] > list[i]){
                  done = false
                  let tmp = list[i - 1]
                  list[i - 1] = list[i]
                  list[i] = tmp
              }
          }
        }
      } else {
        while (!done) {
          done = true
          for (let i = 1; i < list.length; i += 1) {
              if (list[i - 1] < list[i]){
                  done = false
                  let tmp = list[i - 1]
                  list[i - 1] = list[i]
                  list[i] = tmp
              }
          }
        }
      }
    } else {
      let done = false
      if(asc){
        while (!done) {
          done = true
          for (let i = 1; i < list.length; i += 1) {
              if (list[i - 1][sort_by] > list[i][sort_by]){
                  done = false
                  let tmp = list[i - 1]
                  list[i - 1] = list[i]
                  list[i] = tmp
              }
          }
        }
      } else {
        while (!done) {
          done = true
          for (let i = 1; i < list.length; i += 1) {
              if (list[i - 1][sort_by] < list[i][sort_by]){
                  done = false
                  let tmp = list[i - 1]
                  list[i - 1] = list[i]
                  list[i] = tmp
              }
          }
        }
      }
    }
  }
  return list
}

export const get_blackjack_cards = function() {
  return [
    {suit: '', value: '', src: card_back}, 
    {suit: 'Hearts', value: 'A', src: card_0}, 
    {suit: 'Hearts', value: '2', src: card_1}, 
    {suit: 'Hearts', value: '3', src: card_2}, 
    {suit: 'Hearts', value: '4', src: card_3}, 
    {suit: 'Hearts', value: '5', src: card_4}, 
    {suit: 'Hearts', value: '6', src: card_5}, 
    {suit: 'Hearts', value: '7', src: card_6}, 
    {suit: 'Hearts', value: '8', src: card_7}, 
    {suit: 'Hearts', value: '9', src: card_8}, 
    {suit: 'Hearts', value: '10', src: card_9}, 
    {suit: 'Hearts', value: 'J', src: card_10}, 
    {suit: 'Hearts', value: 'Q', src: card_11}, 
    {suit: 'Hearts', value: 'K', src: card_12}, 
    {suit: 'Spades', value: 'A', src: card_13}, 
    {suit: 'Spades', value: '2', src: card_14}, 
    {suit: 'Spades', value: '3', src: card_15}, 
    {suit: 'Spades', value: '4', src: card_16}, 
    {suit: 'Spades', value: '5', src: card_17}, 
    {suit: 'Spades', value: '6', src: card_18}, 
    {suit: 'Spades', value: '7', src: card_19}, 
    {suit: 'Spades', value: '8', src: card_20}, 
    {suit: 'Spades', value: '9', src: card_21}, 
    {suit: 'Spades', value: '10', src: card_22}, 
    {suit: 'Spades', value: 'J', src: card_23}, 
    {suit: 'Spades', value: 'Q', src: card_24}, 
    {suit: 'Spades', value: 'K', src: card_25}, 
    {suit: 'Diamonds', value: 'A', src: card_26}, 
    {suit: 'Diamonds', value: '2', src: card_27}, 
    {suit: 'Diamonds', value: '3', src: card_28}, 
    {suit: 'Diamonds', value: '4', src: card_29}, 
    {suit: 'Diamonds', value: '5', src: card_30}, 
    {suit: 'Diamonds', value: '6', src: card_31}, 
    {suit: 'Diamonds', value: '7', src: card_32}, 
    {suit: 'Diamonds', value: '8', src: card_33}, 
    {suit: 'Diamonds', value: '9', src: card_34}, 
    {suit: 'Diamonds', value: '10', src: card_35}, 
    {suit: 'Diamonds', value: 'J', src: card_36}, 
    {suit: 'Diamonds', value: 'Q', src: card_37}, 
    {suit: 'Diamonds', value: 'K', src: card_38}, 
    {suit: 'Clubs', value: 'A', src: card_39}, 
    {suit: 'Clubs', value: '2', src: card_40}, 
    {suit: 'Clubs', value: '3', src: card_41}, 
    {suit: 'Clubs', value: '4', src: card_42}, 
    {suit: 'Clubs', value: '5', src: card_43}, 
    {suit: 'Clubs', value: '6', src: card_44}, 
    {suit: 'Clubs', value: '7', src: card_45}, 
    {suit: 'Clubs', value: '8', src: card_46}, 
    {suit: 'Clubs', value: '9', src: card_47}, 
    {suit: 'Clubs', value: '10', src: card_48}, 
    {suit: 'Clubs', value: 'J', src: card_49}, 
    {suit: 'Clubs', value: 'Q', src: card_50}, 
    {suit: 'Clubs', value: 'K', src: card_51}, 
  ]
}

export const get_roulette_bets = function(){
  return [
    {id: 'european', src: roulette_bets_european},
    {id: 'european_small', src: roulette_bets_european_small},
    {id: 'american', src: roulette_bets_american},
    {id: 'american_small', src: roulette_bets_american_small},
  ]
}

export const get_slots_images = function(){
  return [
    {id: 'carrot', src: item_image, coord:[0, 0]},
    {id: 'onion', src: item_image, coord:[300, 0]},
    {id: 'potato', src: item_image, coord:[600, 0]},
    {id: 'radish', src: item_image, coord:[600, 300]},
    {id: 'cabbage', src: item_image, coord:[300, 600]},
    {id: 'garlic', src: item_image, coord:[600, 600]},
    {id: 'turnip', src: item_image, coord:[900, 900]},
  ]
}

export const get_craps_bets = function(){
  return [ 
    {id: 'craps', src: craps_bets},
    {x: 5, y: 5, width:40, height:400, text: "pass line", id: "pass_line", src: craps_pass_line, odds: 2},
    {x: 5, y: 400, width:650, height:40, text: "pass line", id: "pass_line", src: craps_pass_line, odds: 2},
    {x: 50, y: 5, width:50, height:300, text: "don't pass line", id: "dont_pass_line", src: craps_dont_pass_line, odds: 2},
    {x: 150, y: 350, width:510, height:50, text: "don't pass line", id: "dont_pass_line", src: craps_dont_pass_line, odds: 2},
    {x: 110, y: 140, width:550, height:115, text: "come", id: "come", src: craps_come, odds: 2},
    {x: 110, y: 5, width:84, height:125, text: "don't come", id: "dont_come", src: craps_dont_come, odds: 2},
    {x: 200, y: 5, width:84, height:125, text: "place bet 4", id: "place_bet_4", src: craps_place_4, odds: 2},
    {x: 290, y: 5, width:84, height:125, text: "place bet 5", id: "place_bet_5", src: craps_place_5, odds: 2},
    {x: 385, y: 5, width:84, height:125, text: "place bet 6", id: "place_bet_6", src: craps_place_6, odds: 2},
    {x: 480, y: 5, width:84, height:125, text: "place bet 8", id: "place_bet_8", src: craps_place_8, odds: 2},
    {x: 570, y: 5, width:84, height:125, text: "place bet 9", id: "place_bet_9", src: craps_place_9, odds: 2},
    {x: 665, y: 5, width:84, height:125, text: "place bet 10", id: "place_bet_10", src: craps_place_10, odds: 2},
    {x: 180, y: 265, width:65, height:80, text: "field bet 2", id: "field_bet_2", src: craps_field_2, odds: 2},
    {x: 245, y: 265, width:55, height:80, text: "field bet 3", id: "field_bet_3", src: craps_field_3, odds: 2},
    {x: 300, y: 265, width:55, height:80, text: "field bet 4", id: "field_bet_4", src: craps_field_4, odds: 2},
    {x: 355, y: 265, width:55, height:80, text: "field bet 9", id: "field_bet_9", src: craps_field_9, odds: 2},
    {x: 410, y: 265, width:60, height:80, text: "field bet 10", id: "field_bet_10", src: craps_field_10, odds: 2},
    {x: 470, y: 265, width:60, height:80, text: "field bet 11", id: "field_bet_11", src: craps_field_11, odds: 2},
    {x: 530, y: 265, width:65, height:80, text: "field bet 12", id: "field_bet_12", src: craps_field_12, odds: 2},
    {x: 50, y: 310, width:50, height:40, text: "6 big 8", id: "6_big_8_01", src: craps_6_big_8, odds: 2},
    {x: 50, y: 350, width:100, height:50, text: "6 big 8", id: "6_big_8_02", src: craps_6_big_8, odds: 2},
    {x: 690, y: 155, width:200, height:50, text: "any 7", id: "any_7", src: craps_seven, odds: 2},
    {x: 690, y: 205, width:100, height:45, text: "hardway 1", id: "hardway_1", src: craps_hardway_1, odds: 2},
    {x: 790, y: 205, width:100, height:45, text: "hardway 2", id: "hardway_2", src: craps_hardway_2, odds: 2},
    {x: 690, y: 250, width:100, height:45, text: "hardway 3", id: "hardway_3", src: craps_hardway_3, odds: 2},
    {x: 790, y: 250, width:100, height:45, text: "hardway 4", id: "hardway_4", src: craps_hardway_4, odds: 2},
    {x: 690, y: 295, width:100, height:45, text: "one roll 1", id: "one_roll_1", src: craps_one_roll_1, odds: 2},
    {x: 790, y: 295, width:100, height:45, text: "one roll 2", id: "one_roll_2", src: craps_one_roll_2, odds: 2},
    {x: 690, y: 340, width:100, height:45, text: "one roll 3", id: "one_roll_3", src: craps_one_roll_3, odds: 2},
    {x: 790, y: 340, width:100, height:45, text: "one roll 4", id: "one_roll_4", src: craps_one_roll_4, odds: 2},
    {x: 690, y: 385, width:200, height:50, text: "any craps", id: "any_craps", src: craps_any_craps, odds: 2},
  ]
}

export const get_keno_images = function(){
  return [{id: 1, src: keno_dirt_01},]
}

export const showStreak = function(streak, lang, dispatch){
  if(streak > 1 && dispatch){    
    let showed_streak = getCookie("casino_streak") // check if opup streak was already shown
    if(typeof showed_streak === "undefined" || showed_streak === "null" || showed_streak === null || showed_streak === ""){
      setCookie("casino_streak", true)							
      
      let streak_days = 'day'
      if(streak>1){
        streak_days = 'days'
      }
      if(lang === "ro"){
        streak_days = 'zi'
        if(streak>1){
          streak_days = 'zile'
        }
      }

      let streak_table = `<div id="streak" class="streak">
        <div class="progress_bubble_container">
          <div class="progress_bubble"></div>
          <div class="bubble bubble_1">1</div>
          <div class="bubble bubble_2">2</div>
          <div class="bubble bubble_3">3</div>
          <div class="bubble bubble_4">4</div>
          <div class="bubble bubble_5">5</div>
          <div class="bubble bubble_6">6</div>
          <div class="bubble bubble_7">7</div>
          </div>
      </div>`							
      
      let text = bigText(streak_table)
      dispatch(popup_info({title: streak + ' ' + streak_days, text: text, width: 600, fireworks: false}))

      $( "#streak .bubble" ).each(function(i) {
        if(i < streak){
          $(this).addClass('active')
        }
      })
    }
  }
}

export const getWindowDimensions = function() {
  const { innerWidth: width, innerHeight: height } = window
  return {width, height}
}