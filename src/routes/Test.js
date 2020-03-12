import React  from 'react';
import { expressHtml } from './ExpressHtml';
 
export default class Test extends React.Component{

    constructor(props){
        super(props);
        this.state={
            //由于初始化时我们需要创造打印机的纸张，所以我们需要打印机的value，
            //由于操作系统打印机的顺序是由0开始的所以我们初始化时设置0
            printerValue:0,
            pageValue:undefined
        }
    }

    componentDidMount(){
        if(typeof CLODOP!=="undefined" && typeof LODOP!=="undefined"){
      
            CLODOP.Create_Printer_List(this.selectRefs);
            CLODOP.Create_PageSize_List(this.pageRefs, this.state.printerValue);
        }
    }



    handlePrint=()=>{
    
        //const MODE="PREVIEW";
        //const MODE="PRINT_DESIGN";
        const MODE="PRINT";
        this.demoPrint(MODE)
    }

    demoPrint=(MODE)=>{//MODE对应着LODOP的预览、打印以及设计
        const {printerValue }=this.state;
        const MarkDestination="586 216  ";
        const LogisticCode="7720052644695844";
        const PackageName="萍乡中转包";
        const OrderCode="FH191209007";
        const Sender={
            Name: "刘德华",
            Mobile: "17798680131",
            ProvinceName: "江苏省",
            CityName: "苏州市",
            ExpAreaName: "昆山市",
            Address: "花桥镇家宝路608号  工业园H库"
        }
        const Receiver={
            Name: "赵先生",
            Mobile: "15245451110",
            ProvinceName: "江西省",
            CityName: "萍乡市",
            ExpAreaName: "莲花县",
            Address: "陕西省某个地方",
        }
        const Onecode=`<div style="font-size:0;position:relative;width:200px;height:30px;">
        <div style="background-color:black;width:2px;height:30px;position:absolute;left:0px;top:0px;">&nbsp;</div>
        <div style="background-color:black;width:1px;height:30px;position:absolute;left:3px;top:0px;">&nbsp;</div>
        <div style="background-color:black;width:1px;height:30px;position:absolute;left:8px;top:0px;">&nbsp;</div>
        <div style="background-color:black;width:3px;height:30px;position:absolute;left:11px;top:0px;">&nbsp;</div>
        <div style="background-color:black;width:2px;height:30px;position:absolute;left:15px;top:0px;">&nbsp;</div>
        <div style="background-color:black;width:3px;height:30px;position:absolute;left:18px;top:0px;">&nbsp;</div>
        <div style="background-color:black;width:3px;height:30px;position:absolute;left:22px;top:0px;">&nbsp;</div>
        <div style="background-color:black;width:2px;height:30px;position:absolute;left:26px;top:0px;">&nbsp;</div>
        <div style="background-color:black;width:3px;height:30px;position:absolute;left:29px;top:0px;">&nbsp;</div>
        <div style="background-color:black;width:2px;height:30px;position:absolute;left:33px;top:0px;">&nbsp;</div>
        <div style="background-color:black;width:3px;height:30px;position:absolute;left:37px;top:0px;">&nbsp;</div>
        <div style="background-color:black;width:1px;height:30px;position:absolute;left:42px;top:0px;">&nbsp;</div>
        <div style="background-color:black;width:1px;height:30px;position:absolute;left:44px;top:0px;">&nbsp;</div>
        <div style="background-color:black;width:3px;height:30px;position:absolute;left:47px;top:0px;">&nbsp;</div>
        <div style="background-color:black;width:2px;height:30px;position:absolute;left:51px;top:0px;">&nbsp;</div>
        <div style="background-color:black;width:1px;height:30px;position:absolute;left:55px;top:0px;">&nbsp;</div>
        <div style="background-color:black;width:3px;height:30px;position:absolute;left:58px;top:0px;">&nbsp;</div>
        <div style="background-color:black;width:2px;height:30px;position:absolute;left:62px;top:0px;">&nbsp;</div>
        <div style="background-color:black;width:2px;height:30px;position:absolute;left:66px;top:0px;">&nbsp;</div>
        <div style="background-color:black;width:3px;height:30px;position:absolute;left:69px;top:0px;">&nbsp;</div>
        <div style="background-color:black;width:1px;height:30px;position:absolute;left:74px;top:0px;">&nbsp;</div>
        <div style="background-color:black;width:2px;height:30px;position:absolute;left:77px;top:0px;">&nbsp;</div>
        <div style="background-color:black;width:3px;height:30px;position:absolute;left:81px;top:0px;">&nbsp;</div>
        <div style="background-color:black;width:1px;height:30px;position:absolute;left:86px;top:0px;">&nbsp;</div>
        <div style="background-color:black;width:2px;height:30px;position:absolute;left:88px;top:0px;">&nbsp;</div>
        <div style="background-color:black;width:3px;height:30px;position:absolute;left:92px;top:0px;">&nbsp;</div>
        <div style="background-color:black;width:1px;height:30px;position:absolute;left:96px;top:0px;">&nbsp;</div>
        <div style="background-color:black;width:2px;height:30px;position:absolute;left:99px;top:0px;">&nbsp;</div>
        <div style="background-color:black;width:1px;height:30px;position:absolute;left:103px;top:0px;">&nbsp;</div>
        <div style="background-color:black;width:3px;height:30px;position:absolute;left:106px;top:0px;">&nbsp;</div>
        <div style="background-color:black;width:2px;height:30px;position:absolute;left:110px;top:0px;">&nbsp;</div>
        <div style="background-color:black;width:1px;height:30px;position:absolute;left:114px;top:0px;">&nbsp;</div>
        <div style="background-color:black;width:3px;height:30px;position:absolute;left:117px;top:0px;">&nbsp;</div>
        <div style="background-color:black;width:2px;height:30px;position:absolute;left:121px;top:0px;">&nbsp;</div>
        <div style="background-color:black;width:3px;height:30px;position:absolute;left:125px;top:0px;">&nbsp;</div>
        <div style="background-color:black;width:1px;height:30px;position:absolute;left:129px;top:0px;">&nbsp;</div>
        <div style="background-color:black;width:3px;height:30px;position:absolute;left:132px;top:0px;">&nbsp;</div>
        <div style="background-color:black;width:1px;height:30px;position:absolute;left:137px;top:0px;">&nbsp;</div>
        <div style="background-color:black;width:2px;height:30px;position:absolute;left:139px;top:0px;">&nbsp;</div>
        <div style="background-color:black;width:3px;height:30px;position:absolute;left:143px;top:0px;">&nbsp;</div>
        <div style="background-color:black;width:1px;height:30px;position:absolute;left:147px;top:0px;">&nbsp;</div>
        <div style="background-color:black;width:2px;height:30px;position:absolute;left:150px;top:0px;">&nbsp;</div>
        <div style="background-color:black;width:3px;height:30px;position:absolute;left:154px;top:0px;">&nbsp;</div>
        <div style="background-color:black;width:1px;height:30px;position:absolute;left:159px;top:0px;">&nbsp;</div>
        <div style="background-color:black;width:2px;height:30px;position:absolute;left:161px;top:0px;">&nbsp;</div>
        <div style="background-color:black;width:3px;height:30px;position:absolute;left:165px;top:0px;">&nbsp;</div>
        <div style="background-color:black;width:1px;height:30px;position:absolute;left:169px;top:0px;">&nbsp;</div>
        <div style="background-color:black;width:2px;height:30px;position:absolute;left:172px;top:0px;">&nbsp;</div>
        <div style="background-color:black;width:1px;height:30px;position:absolute;left:176px;top:0px;">&nbsp;</div>
        <div style="background-color:black;width:1px;height:30px;position:absolute;left:178px;top:0px;">&nbsp;</div>
        <div style="background-color:black;width:2px;height:30px;position:absolute;left:183px;top:0px;">&nbsp;</div>
        <div style="background-color:black;width:2px;height:30px;position:absolute;left:187px;top:0px;">&nbsp;</div>
        <div style="background-color:black;width:3px;height:30px;position:absolute;left:192px;top:0px;">&nbsp;</div>
        <div style="background-color:black;width:1px;height:30px;position:absolute;left:196px;top:0px;">&nbsp;</div>
        <div style="background-color:black;width:2px;height:30px;position:absolute;left:198px;top:0px;">&nbsp;</div>
        <div style="background-color:black;width:0px;height:30px;position:absolute;left:200px;top:0px;">&nbsp;</div>
        <div style="background-color:black;width:0px;height:30px;position:absolute;left:200px;top:0px;">&nbsp;</div>
        </div>`

        const html = expressHtml(LogisticCode, MarkDestination, PackageName, Sender, Receiver, Onecode, OrderCode);

        if(typeof CLODOP==="undefined"){
            alert("系统检测出你没有启动打印设备或者端口号设置错误！！");
            return;
        }

        LODOP.SET_PRINTER_INDEXA(Number(printerValue));
        LODOP.ADD_PRINT_HTM(0, 0, "100%", "100%", html);

        if(MODE){
            LODOP[MODE]();
        }
    }

    handleChangePrinter=(e)=>{
        this.setState({
            printerValue: e.target.value,
            pageValue: undefined
        }, () => {
            if (typeof CLODOP !== "undefined") {
                CLODOP.Create_PageSize_List(this.pageRefs, this.state.printerValue);
            }
        })
    }

    handleChangePage=(e)=>{
        this.setState({
            pageValue: e.target.value
        })
    }
    
    render(){

        const styleObj={
 
            justifyContent:"center",
            alignItems:"center",
            fontSize:50,
            color:'skyblue',
            width:'100%',
            height:'100%',
            backgroundColor:"blue",
        }

        const buttonObj={
             
            border: 'none',
            borderRadius:'2px',
            background:'#e0e0e0',
            color:'inherit',
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
            whiteSpace: 'nowrap',
            fontWeight:500,
            height: '32px',
            padding: '0 15px',
            fontSize: '14px',
            outline: 0,
            position: 'relative',
            textDecoration:'none',
            transition:'all .3s ease',
            opacity:1,
            cursor:'pointer',
            backgroundColor: 'rgba(91,231,196)',
            opacity:1,
            color:'white',
            boxShadow: '0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2)'
 
        }

        const selectObj={
            border: "1px solid #d9d9d9",
            padding: "4px 0"
        }
    
        return(
            <div style={styleObj}>
                <div style={{width:"100%"}}>Hello React</div>
           
                <div style={{width:"100%"}}><button style={buttonObj} onClick={this.handlePrint}>测试打印</button></div>

                <select style={selectObj} ref={ref => this.selectRefs = ref} value={this.state.printerValue} size="1" onChange={this.handleChangePrinter}></select>

                <select style={selectObj} ref={ref => this.pageRefs = ref} value={this.state.pageValue} size="1" onChange={this.handleChangePage}></select>
            </div>
        )
    }
}