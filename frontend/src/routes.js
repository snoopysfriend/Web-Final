import { HomePage, SearchPage } from './pages';

const routes = [
  {
    path: '/',
    component: HomePage,
    exact: true,
    breadcrumbName: 'Home'
  },
  {
    path: '/search',
    component: SearchPage,
    breadcrumbName: 'search'
  },
//   {
//     path: '/electronics',
//     component: Electronics,
//     breadcrumbName: 'Electronics',
//     routes: [
//       {
//         path: '/electronics/mobile',
//         component: Mobile,
//         breadcrumbName: 'Mobile Phone'
//       },
//       {
//         path: '/electronics/desktop',
//         component: Desktop,
//         breadcrumbName: 'Desktop PC'
//       },
//       {
//         path: '/electronics/laptop',
//         component: Laptop,
//         breadcrumbName: 'Laptop'
//       }
//     ]
//   }
];

export default routes;