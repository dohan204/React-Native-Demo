import React, { useState } from 'react';
import { View } from 'react-native';
import { PreviewLayout, styles } from './FlexDirection';

export default function JusitfyContent() {
    const [justifyContent, setJustifycontent] = useState<string>('flex-start');
    console.log(justifyContent)
  return (
    <PreviewLayout
        label='justifyContent'
        selectedValue={justifyContent}
        values={['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly']}
        setSelectedValue={setJustifycontent}
    >
        <View style={[styles.box, {backgroundColor: 'powderblue'}]} />
        <View style={[styles.box, {backgroundColor: 'coral'}]} />
        <View style={[styles.box, {backgroundColor: 'steelblue'}]} />
    </PreviewLayout>
  )
}
