import '../css/burger.scss';

function Burger(){

    return(
        <header className='BurgerContainer'>
            <div className='NameApp'>
                <h1>BUDDY</h1>
                <input className='searchParticipant' type="text" placeholder='Request'></input>
            </div>
        </header>
    );
};
export default Burger;