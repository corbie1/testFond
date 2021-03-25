import React from 'react';
import { Button } from '../buttons/button';
import { DropDown } from '../dropDown/dropDown';
export const Layout = () => {

    const handleButtonPress = () => {
        console.log('click')
    }

    return (
        <div className="App">
            <div className='buttons'>
                <Button
                    content='Click me'
                    icon={'/logo192.png'}
                    loading={false}
                    onClick={handleButtonPress}
                    disabled={false}
                    type="danger"
                    size='min'
                    outlined={true}
                    text={false}
                />
                <Button
                    content='Click me'
                    icon={'/logo192.png'}
                    disabled={true}
                    loading={true}
                />
                <Button
                    content='Click me'
                    icon={'/logo192.png'}
                    type="success"
                    loading={false}
                />
                <Button
                    content='Click me'
                    icon={'/logo192.png'}
                    type="warning"
                    loading={false}
                    outlined={true}
                />
                <Button
                    content='Text'
                    icon={'/logo192.png'}
                    outlined={false}
                    text={true}

                />
            </div>
            <Button
                content='Disabled'
                icon={'/logo192.png'}
                type="warning"
                disabled={true}
                loading={false}
                size='block'
            />
            <DropDown />
        </div>
    )
} 