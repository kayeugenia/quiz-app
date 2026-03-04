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
        <div className="disclaimer" style={{textAlign: 'justify', padding: '0 50px 0 50px'}}>This quiz poses short questions that help locate courses that align with your interests. All courses collectively promote critical thinking, an appreciation of complexity, effective communication and personal and social responsibility. They meet three General Education requirements as a block. The final courses returned may not be an absolutely perfect fit for you but they should connect with at least some of your interests.</div>
      </div>
    </main>
  );
}
