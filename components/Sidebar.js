import { Avatar, Button, IconButton } from "@material-ui/core"
import styled from "styled-components"
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import * as EmailValidator from "email-validator"
import { auth } from "../firebase";

const Sidebar = () => {

    const createNewChat = () => {
        const input = prompt("Please enter an email address for the user you wish to chat with")

        if (!input) return null;

        if(EmailValidator.validate(input)) {
            // To be Done later
        }

    }

    return (
        <Container>

            {/* Sidebar Header */}
            <Header>
                
                {/* User Avatar */}
                <UserAvatar onClick={() => auth.signOut()}/>

                {/* Contain Header Icons */}
                <IconContainer> 
                    {/* For Nice Touchable UI */}
                    <IconButton>                    
                        <ChatIcon />
                    </IconButton>                  
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </IconContainer>  

            </Header>

            {/* Search Icon and Search Bar */} 
            <SearchIcons>
                <SearchIcon />
                <SearchInput placeholder="Search in chats" />
            </SearchIcons>

            <SidebarButton onClick={createNewChat}>Start a new chat</SidebarButton>

        </Container>
    )
}

const Container = styled.div``

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    z-index: 0;
    top: 0;
    padding: 15px;
    height: 80px;
    border-bottom: 1px solid whitesmoke;
`

const UserAvatar = styled(Avatar)`
    cursor: pointer;
    :hover {
        opacity: 0.8
    }
`

const IconContainer = styled.div`
`

const SearchIcons = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
    border-radius: 2px solid
`

const SearchInput = styled.input`
    outline-width: 0;
    border: none;
    flex: 1;
`
const SidebarButton = styled(Button)`
    width: 100%;
    &&& {
        border-top: 1px solid whitesmoke;
        border-bottom: 1px solid whitesmoke;
    }

`

export default Sidebar
