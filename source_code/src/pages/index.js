import Head from 'next/head'
import MainHome from '@/components/Home/MainHome'
import GameModes from '@/components/Home/GameModes'
import Categories from '@/components/Home/Categories'
import FinkiCategories from '@/components/Home/FinkiCategories'
import { useEffect } from 'react'

export default function Main () {
	useEffect(() => { window.onbeforeunload = () => null }, [])

	return (
		<>
			<Head>
				<title>FinkiBrainQuiz</title>
			</Head>
			<MainHome />
			<GameModes />
			{/* <FinkiCategories /> */}
			<Categories />
			<style jsx global>
				{`
				#__next {
					display: grid;
	        grid-template-columns: 1fr;
				}
        @media (min-width: 1024px) {
          #__next {
            grid-template-columns: 1.4fr 1fr;
          }
			  `}
			</style>
		</>
	)
}
