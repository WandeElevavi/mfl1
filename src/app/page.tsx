// import "../globals.css"
import Grid1 from './components/Grid1'
import Grid2 from './components/Grid2'
import Grid3 from './components/Grid3'
import Grid4 from './components/Grid4'
import Grid5 from './components/Grid5'
import Grid6 from './components/Grid6'
import Grid7 from './components/Grid7'
import Grid8 from './components/Grid8'
import Grid9 from './components/Grid9'


export const revalidate = 10

export default function Home() {
  return (
      <main>
      <Grid1 />
      <Grid2 />
      <Grid3 />
      <Grid4 />
      <Grid5 />
      <Grid6 />
      <Grid7 />
      <Grid8 />
      <Grid9 />

      <div className="p-5 mt-2 space-y-5"></div>

     </main>
  )
}

