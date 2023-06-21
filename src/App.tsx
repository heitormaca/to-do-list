import toDoLogo from './assets/logo.svg'
import { PlusCircle, Trash } from '@phosphor-icons/react'
import styles from './App.module.css'
import './global.css'

function App() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <img src={toDoLogo} alt="Logotipo do ToDoList" />
      </div>

      <div>
        <input
          className={styles.input}
          type="text"
          name="task"
          placeholder="Adicione uma nova tarefa"
        />
        <button className={styles.button}>
          Criar <PlusCircle size={22} />
        </button>
      </div>

      <div>
        <div>
          <p>Tarefas criadas</p>
          <span>5</span>
        </div>
        <div>
          <p>Concluídas</p>
          <span>2 de 5</span>
        </div>
      </div>

      <div style={{ background: '#262626' }}>
        <div>
          <div>
            <label className={styles.CheckboxLabel}>
              <input className={styles.Checkbox} type="checkbox" name="completed" />
              <span className={styles.CheckboxSpan}></span>
            </label>
          </div>
          <p>
            Integer urna interdum massa libero auctor neque turpis turpis
            semper. Duis vel sed fames integer.
          </p>
        </div>
        <div className={styles.trashIcon}>
          <Trash size={16} />
        </div>
      </div>
    </div>
  )
}

export default App
