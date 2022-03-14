import React, { useState, useEffect, useRef } from 'react'
import stocks from '../stocks'

export default function useStock() {
  let index = Math.floor(Math.random() * 500)
  return stocks[index]
}
