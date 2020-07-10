import Home from './components/Home'
import Artist from './components/Artist'
import artistResult from './components/artistResult'
import songResult from './components/songResult'

export const routes = [
    { path: '/', name: 'Home', component: Home},
    { path: '/artist/:id' ,name: 'Artist', component: Artist},
    { path: '/artistResult', name: 'artistResult', component: artistResult},
    { path: '/songResult', name: 'songResult', component: songResult}
]