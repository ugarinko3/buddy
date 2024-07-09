import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="entrance">
      <header className="entrance-header">
        <div className='login'>
          <h2>Welcome</h2>
          <form className='form'>
            <div class="form_item">
              <label for="formLogin" class="form_label">Login:</label>
              <input id="formLogin" type="text" name="login" class="form_input _req"></input>
            </div>
            <div class="form_item">
                <label for="formPassword" class="form_label">Password:</label>
                <input id="formPassword" type="text" name="password" class="form_input _req"></input>
            </div>
            <button type="submit" onclick="">submit</button>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
