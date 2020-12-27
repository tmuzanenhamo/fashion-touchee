import React from 'react';
import './home-page.styles.scss';
import Directory from '../../components/directory/directory.component'

const HomePage = (props) => {
    return(
        <div className='homepage'>
            <Directory/>
        </div>
    )
}

export default HomePage;