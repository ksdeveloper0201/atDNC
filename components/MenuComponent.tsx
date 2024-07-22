const menuColumns = [
  {
    name: 'Introduction',
    redirectUrl: '/intro'
  },
  {
    name: 'Skills',
    redirectUrl: '/skills'
  },
  {
    name: 'Products',
    redirectUrl: '/products'
  },
  {
    name: 'Tech Blog (microCMS)',
    redirectUrl: '/cmsBlog'
  },
  {
    name: 'Blog (self API)',
    redirectUrl: '/blog'
  }
]

const ColumnOneOf: React.FC<{ name: string, redirectUrl: string }> = ({ name, redirectUrl }) => {
  return (
    <li className="m-6 text-2xl">
      <a href={redirectUrl}>{name}</a>
    </li>
  )
}

const MenuComponent = () => {
  return (
    <div className="display-container">
      <div className="menu-container flex justify-center pt-12">
        <ul className="list-inside md:flex md:list-inside md:space-x-4">
          {menuColumns.map((item, index) => {
            return (
              <ColumnOneOf key={index} name={item.name} redirectUrl={item.redirectUrl} />
            )
          })}
        </ul>
      </div>
    </div>
  );
};

export default MenuComponent;
