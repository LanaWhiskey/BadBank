import { createContext, useContext } from 'react';

const ctx = {
    "accounts": [
        {
            "id": 0,
            "name": "Jon Doe",
            "email": "JonDoe@mit.edu",
            "balance": 0,
            "password": "shhhhhhh",
            "transactionHistory": [],
            "loggedin": false
        }
    ]
}

const AccountContext = createContext(ctx);

export default AccountContext;