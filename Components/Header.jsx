import Link from 'next/link'
//import {Header} from '../Components/Header'
import classes from './Header.module.css'
const pages=[{href:'./',title:'Home'},{href:'/info',title:'info'},{href:'like-demo',title:'ЛАКНИ МЕНЯ:)'},{href:'ToDoApp',title:'Список дел'},{href:'ToDoApp2',title:'Список дел 2'},{href:'Calendar',title:"Календарь"},{href:
  'Jsph',title:'JSPH'
},{href:'Jsph2',title:'JSPH2'}]
export default function Header() {
  console.log("classes",classes)
    return (
      <header>
        <nav className={classes.Header}>
          <ul>
            {pages.map(obj=><li key={obj.href}>
              <Link href={obj.href}>{obj.title}</Link>
              </li>)}
          </ul>
        </nav>
      </header>
    );
  }
/*
            
            <!--li>
              </ul><Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/info">Info</Link>
            </li-->
*/