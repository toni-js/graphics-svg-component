import React, { Component } from 'react'
import ReactDOM from 'react-dom'

type _t = {
  f: number,
  sv: number,
  ev: number
}
type __t = {
  f: number,
  aic: number,
  ic: number
}

const Default: any = 
{
  style: {
    fill: 'transparent'
  }
}

// <polygon points='10,100 200,200 300,300' style={ {fill: 'lime', stroke: 'purple', strokeWidth: '1'} }></polygon>
const SimpleGraphics: ( props: { data: _t[] } ) => JSX.Element = ( { data } ) => {
  const Rect = []
  const max = data.reduce( ( after, current ) => {
    if( after.f > current.f )
      return after
    else 
      return current
  } ) || data[0].f
  console.log( max )

  const padding = 0

  const 
    reacts = data.map( ( v, i ) => 
      <>
        <rect 
          y={ 0 } 
          x={ i * 100 / data.length + '%'} 
          width={ 100 / data.length + '%' } 
          height={ v.f * 100 / max.f + '%' } 
          key={`react-${i}`} 
          style={ { stroke: 'black', fill: 'transparent', strokeWidth: '1', pointerEvents: 'all' } }>
        </rect>
        {
          false
            ? <text x={ ( i * 100 / data.length ) * -1 + '%' } y={ v.f * 100 / max.f * -1.05 + '%' } fill="red" style={ { transform: `rotate(180deg) translateX(-${ 55 / data.length }%)` } }>{v.f}</text>
            : undefined
        }
      </>
    )
  return(
    <svg style={ { transform: 'rotate(180deg)', overflow: 'visible', margin: '50px', width: '90%' } }>
      {reacts}
      {
        true
          ? 
            <>
              <line x1={'-1%'} x2={'100.6%'} y1={'-5%'} y2={'-5%'} style={ { stroke: 'red', strokeWidth: '2' } }></line>
              <line x1={'100.6%'} x2={'100.6%'} y1={'-5%'} y2={'105%'} style={ { stroke: 'red', strokeWidth: '2' } }></line>
            </>
          : undefined
      }
    </svg>
  )
}

const random: _t[] = []

for( let i = 0; i < 100; i ++ ){
  random.push( {
    f: Math.random() * ( 9000000 - 1 ) + 1,
    sv: 0,
    ev: 0
  } )
}

ReactDOM.render( <SimpleGraphics data={ random }/>, document.body )