import { StyledHeader } from './styles';

type HeaderProps = {
  headerColor?: string;
  logo?: string;
};

const Header = ({ headerColor, logo }: HeaderProps) => (
  <StyledHeader headerColor={headerColor}>
    {!!logo && <img src={logo} />}
  </StyledHeader>
);

export default Header;
