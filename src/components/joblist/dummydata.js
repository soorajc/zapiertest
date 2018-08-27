
const profilePic = require('../../assets/profilepic.png');

const dummyData = [
  {
    no: 'JOB-0888',
    name: 'Install Equipment to HR Department',
    time: '9:30 am - 12:30 pm',
    company: 'Parts and Pieces',
    address: '1 Jurong West Central 2 #B1-23 Jurong Point,Singapore 648886',
    type: 'Installation',
    status: 'Dispatched',
    iconName: 'alert',
    iconColor: '#F7435B',
    image: profilePic,
    contact: 'Zexi Jiang',
    description: 'Install Equipment to HR Department and enable the software and integrate it with the current systems with firewall',
    instructions: 'Lift Faulty, Take stairs',
  },
  {
    no: 'JOB-0010',
    name: 'Maintaining of installed equipments',
    time: '2:00 pm - 4:00 pm',
    company: 'Realty Solutions',
    address: '9 Temasek Boulevard #40-01 Suntec Tower 2, Singapore 038989',
    type: 'Maintenance',
    status: 'Dispatched',
    iconName: 'alert-outline',
    iconColor: '#FFC25B',
    image: profilePic,
    contact: 'Mako Sansi',
    description: 'Do the maintenance work of the installed equipments in the pr department',
    instructions: 'Road Blocked, Take Subway',
  },
];

export default dummyData;
