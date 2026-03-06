import Link from 'next/link';
import { CourseCard } from './courseCard';

export default function Home() {
  return (
    <main>
      <div className='container'>
        <img src='/tembulogo.png' alt='Tembusu Logo' height='110vh'/>
        <div>
            <img src='/coursebanner3.png' alt='Tembusu Courses' width='100%'/>
        </div>
        <h1>Find UTCP @ Tembusu courses that you want to read!</h1>
        <Link href='/quiz'>
          <button>Start Quiz</button>
        </Link>
        <div className="disclaimer disclaimer-bold" style={{textAlign: 'center', paddingBottom: '5px'}}>Disclaimer</div>
        <div className="disclaimer" style={{textAlign: 'justify', padding: '0 50px 0 50px'}}>This quiz poses short questions that help locate courses that align with your interests. All courses collectively promote <strong style={{color: '#eab24b'}}>(1) critical thinking, (2) an appreciation of complexity, (3) effective communication</strong> and <strong style={{color: '#eab24b'}}>personal and social responsibility</strong>. They meet three General Education requirements <strong style={{color: '#eab24b'}}>as a block</strong>. The final courses returned may not be an absolutely perfect fit for you but they should connect with at least some of your interests.</div>
      </div>
    </main>
  );
}
