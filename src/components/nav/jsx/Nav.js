import Links from "./Links";
import SearchInput from './SearchInput';
import '../styles/nav.css';

const Nav = () => {
  return (
    <nav className="product-page-nav">
      <Links />
      <SearchInput />
    </nav>
  )
}

export default Nav