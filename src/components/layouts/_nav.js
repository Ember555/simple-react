import { createInit } from '../../reduxs/user/create'
import { createInit as createGroupInit } from '../../reduxs/group/create'
import { createInit as createOrgInit } from '../../reduxs/org/create'
import {
  createAddGroupInit,
  createAddOrgInit,
} from '../../reduxs/user/createAdd'

// API management
import {
  //
  rateInit,
  urlInit,
  certInit,
} from '../../reduxs/api/modal'

export default {
  items: [
    // {
    //   name: 'Settings',
    //   url: '/configs',
    //   icon: 'icon-wrench',
    //   children: [
    //     {
    //       name: 'Peer',
    //       url: '/configs/peer',
    //       icon: 'icon-cloud-download',
    //     },
    //     {
    //       name: 'Database',
    //       url: '/configs/database',
    //       icon: 'icon-support',
    //     },
    //     {
    //       name: 'API',
    //       url: '/configs/api',
    //       icon: 'icon-puzzle',
    //     },
    //   ],
    // },
    // {
    //   name: 'Document Type',
    //   url: '/doctypes',
    //   icon: 'icon-wrench',
    //   // children: [],
    // },
    {
      name: 'User Management',
      url: '/admin',
      icon: 'icon-wrench',
      children: [
        {
          name: 'List Participant',
          url: '/admin/userList',
          icon: 'icon-list',
        },
        {
          name: 'List Group',
          url: '/admin/groupList',
          icon: 'icon-list',
        },
        {
          name: 'List Organization',
          url: '/admin/orgList',
          icon: 'icon-list',
        },
        {
          name: 'Create Participant',
          url: '/admin/createUser',
          icon: 'icon-user-follow',
          action: createInit,
        },
        {
          name: 'Create Group',
          url: '/admin/createGroup',
          icon: 'icon-user-follow',
          action: createGroupInit,
        },
        {
          name: 'Create Organization',
          url: '/admin/createOrg',
          icon: 'icon-user-follow',
          action: createOrgInit,
        },
        {
          name: 'Add Participant to Group',
          url: '/admin/addUser',
          icon: 'icon-link',
          action: createAddGroupInit,
        },
        {
          name: 'Add Participant to Organization',
          url: '/admin/addUserToOrg',
          icon: 'icon-link',
          action: createAddOrgInit,
        },
      ],
    },
    {
      name: 'Settings',
      url: '/admin',
      icon: 'icon-wrench',
      children: [
        {
          name: 'API Key',
          url: '/api/key',
          icon: 'icon-list',
        },
        {
          name: 'Update Certificate',
          url: '/api/cert',
          icon: 'icon-list',
          action: certInit,
        },
        {
          name: 'Update URL',
          url: '/api/url',
          icon: 'icon-list',
          action: urlInit,
        },
        {
          name: 'Rate Limit',
          url: '/api/rate',
          icon: 'icon-list',
          action: rateInit,
        },
      ],
    },
    {
      name: 'Network Management',
      url: '/admin',
      icon: 'icon-wrench',
      children: [
        {
          name: 'Deploy Chaincode',
          url: '/blockchain/deployment',
          icon: 'icon-list',
        },
        // {
        //   name: 'Instantiate Chaincode',
        //   url: '/blockchain/instantiate',
        //   icon: 'icon-list',
        // },
        {
          name: 'Upgrade Chaincode',
          url: '/blockchain/upgrade',
          icon: 'icon-list',
        },
        {
          name: 'List of Channel',
          url: '/blockchain/channel',
          icon: 'icon-list',
        },
        {
          name: 'List of Service',
          url: '/blockchain/service',
          icon: 'icon-list',
        },
        {
          name: 'List of Channel Mapping',
          url: '/blockchain/mapping',
          icon: 'icon-list',
        },
      ],
    },
    {
      name: 'Network Directory',
      url: '/admin',
      icon: 'icon-wrench',
      children: [
        {
          name: 'List Participant',
          url: '/networkDirectory/userList',
          icon: 'icon-list',
        },
        {
          name: 'List Group',
          url: '/networkDirectory/groupList',
          icon: 'icon-list',
        },
      ],
    },
  ],
}
