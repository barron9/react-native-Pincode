import React, { memo, useState, useRef, createRef, useEffect } from 'react';
import {
    View, Text, Alert, TextInput, Platform, StyleSheet, Dimensions
} from 'react-native';
import { Styles } from './style';

import { NavigationSwitchScreenProps, StackActions, NavigationActions } from 'react-navigation';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';


export const HomeScreen = memo(function HomeScreen(props: NavigationSwitchScreenProps) {
    const [buttonmsg, setbuttonmsg] = useState('');
    const [stage, setstage] = useState(0);
    //const [qtext, settext] = useState('');
    let qtext = ''
    const rx=1
    const ry=1
    const e1 = useRef(null);
    const e2 = useRef(null);
    const e3 = useRef(null);
    const e4 = useRef(null);
    const e5 = useRef(null);
    const e6 = useRef(null);

    const [qstatus, setstatus] = useState(0);
    const [E1, setE1] = useState(' ');
    const [E2, setE2] = useState(' ');
    const [E3, setE3] = useState(' ');
    const [E4, setE4] = useState(' ');
    const [E5, setE5] = useState(' ');
    const [E6, setE6] = useState(' ');


    useEffect(() => {
        let s = setInterval(() => {
            if (qstatus > 10) {
                clearTimeout(s);
                setstatus(0)
            } else {
                setstatus(qstatus => qstatus + 1)
            }
        }, 100);
        return () => {
            clearTimeout(s);
        };
    }, [qstatus])

 

    return (
        <View style={[Styles.container, { padding: 25, backgroundColor: 'white' }]}>
            <Text style={{ fontSize: 10, fontWeight: '100', textAlign: 'right' }}>VersionUpdate: 19aug2020</Text>

            <ScrollView overScrollMode={'always'}>
                <Text style={[Styles.text, { fontSize: 24, fontWeight: 'bold' }]}>Dispatch Client</Text>
                <Text style={[Styles.text, { fontSize: 10, marginTop: 30, fontWeight: 'bold', marginBottom: 10, }]}>Step 1.</Text>
                <Text style={[Styles.text, { fontSize: 16, fontWeight: '100' }]}>Enter card's BT address to start transfer</Text>
                {/* <TextInput
                    placeholder={"01F289..."}
                    placeholderTextColor={'#ccc'}
                    autoCapitalize={"characters"}
                    style={{ marginTop: 10, height: 40, borderColor: 'gray', borderWidth: 1, paddingLeft: 10 }}
                    maxLength={6}
                    onChangeText={(t) => settext(t)}
                    value={qtext}
                /> */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 20, marginRight: 20 }}>

                    <View style={styles.viewstyleinput}  >
                        <TextInput value={E1} selectTextOnFocus ref={e1} maxLength={1} style={[styles.textinputstyle,{borderBottomWidth:e1.current &&e1.current.isFocused()?3:3,borderBottomColor:e1.current && e1.current.isFocused()?'red':'#eee'}]} onKeyPress={({ nativeEvent: { key: keyValue } }) => { if (keyValue === 'Backspace') { e1.current.focus(); } }} onChangeText={(E) => {if (!E) { setE1(E); e1.current.focus(); return };  setE1(E); e2.current.focus() }} />
                    </View>

                    <View style={styles.viewstyleinput}  >
                        <TextInput value={E2} selectTextOnFocus ref={e2} maxLength={1} style={[styles.textinputstyle,{borderBottomWidth:e2.current && e2.current.isFocused()?3:3,borderBottomColor:e2.current && e2.current.isFocused()?'red':'#eee'}]} onKeyPress={({ nativeEvent: { key: keyValue } }) => { if (keyValue === 'Backspace') { e1.current.focus(); } }} onChangeText={(E) => { if (!E) { setE2(E); e1.current.focus(); return }; setE2(E); e3.current.focus() }} />
                    </View>

                    <View style={styles.viewstyleinput} >
                        <TextInput value={E3} selectTextOnFocus ref={e3} maxLength={1} style={[styles.textinputstyle,{borderBottomWidth:e3.current && e3.current.isFocused()?3:3,borderBottomColor:e3.current && e3.current.isFocused()?'red':'#eee'}]} onKeyPress={({ nativeEvent: { key: keyValue } }) => { if (keyValue === 'Backspace') { e2.current.focus(); } }} onChangeText={(E) => { if (!E) { setE3(E); e2.current.focus(); return }; setE3(E); e4.current.focus() }} />
                    </View>

                    <View style={styles.viewstyleinput}  >
                        <TextInput value={E4} selectTextOnFocus ref={e4} maxLength={1} style={[styles.textinputstyle,{borderBottomWidth:e4.current && e4.current.isFocused()?3:3,borderBottomColor:e4.current && e4.current.isFocused()?'red':'#eee'}]} onKeyPress={({ nativeEvent: { key: keyValue } }) => { if (keyValue === 'Backspace') { e3.current.focus(); } }} onChangeText={(E) => { if (!E) { setE4(E); e3.current.focus(); return }; setE4(E); e5.current.focus() }} />
                    </View>

                    <View style={styles.viewstyleinput}  >
                        <TextInput value={E5} selectTextOnFocus ref={e5} maxLength={1} style={[styles.textinputstyle,{borderBottomWidth:e5.current && e5.current.isFocused()?3:3,borderBottomColor:e5.current && e5.current.isFocused()?'red':'#eee'}]} onKeyPress={({ nativeEvent: { key: keyValue } }) => { if (keyValue === 'Backspace') { e4.current.focus(); } }} onChangeText={(E) => { if (!E) { setE5(E); e4.current.focus(); return }; setE5(E); e6.current.focus() }} />
                    </View>

                    <View style={styles.viewstyleinput} >
                        <TextInput value={E6} selectTextOnFocus ref={e6} maxLength={1} style={[styles.textinputstyle,{borderBottomWidth:e6.current && e6.current.isFocused()?3:3,borderBottomColor:e6.current && e6.current.isFocused()?'red':'#eee'}]} onKeyPress={({ nativeEvent: { key: keyValue } }) => { if (keyValue === 'Backspace') { e5.current.focus(); } }} onChangeText={(E) => { if (!E) { setE6(E); e5.current.focus(); return }; setE6(E); }} />
                    </View>
                </View>
                <TouchableOpacity onPress={() => initBLEClient()}>
                    <View style={{ width: 290 * rx, height: 50 * ry, alignItems: 'center', backgroundColor: 'red', alignSelf: 'center', margin: 5, justifyContent: 'center' }}>
                        <Text style={{ fontSize: 16, fontWeight: '300', color: 'white' }}>Connect & Push</Text>
                    </View>
                </TouchableOpacity>

                <Text style={[Styles.text, { fontSize: 10, fontWeight: 'bold', marginTop: 30, marginBottom: 10, }]}>Step 2.</Text>
                <Text style={[Styles.text, { fontSize: 16, fontWeight: '100', marginBottom: 10 }]}>Status:Ready, Status:Writing Event Details to Card, Status:Writing Done, Status:Error Occured</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    {[...Array(10).keys()].map((i) =>
                        <View style={{ width: Dimensions.get('window').width / 14, height: 5 * ry, alignItems: 'center', backgroundColor: qstatus > i ? stage == 0 ? 'red':'yellow' : '#ccc', justifyContent: 'center' }} />
                    )}
                </View>

                <Text style={[Styles.text, { fontSize: 10, fontWeight: '100', marginTop: 10 }]}>Card will be disconnected after succesfull write operation</Text>


            </ScrollView>


        </View>
    );


});
const styles = StyleSheet.create({
    text: {
        fontFamily: 'Proxima Nova',
        textAlign: 'left',
       
    },
    textinputstyle: {
        fontSize: 20, fontWeight: 'bold', width: '100%', height: '100%', textAlign: 'center'
    },
    viewstyleinput: {
        width: 40 * rx, height: 55 * ry, alignItems: 'center', backgroundColor: '#ddd', justifyContent: 'center'
    }
})
