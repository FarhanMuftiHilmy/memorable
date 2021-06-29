import React from 'react'
import Header from '../../components/header/Header'
import Quote from './Quote'

export default function Home() {
    return (
        <>
            <Header/> 
            <div className="title">
                <h2 className="text-center">Words Today</h2>
                <Quote/>
            </div>
        </>
    )
}
