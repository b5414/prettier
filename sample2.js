const items = [
	this._modePanel,
	this.fullComponentNameLabel,
	this.newFullComponentNameLabel,
	this.editExistingButton,
	this.manualList,
];

// иииииииииии:

const initEditorEvents = () => {
	this.detachEditorEvents();

	this._eventsDisposables.push(this._editor.onDidFocusEditorText(() => this.fireEvent('focus', this)), this._editor.onDidBlurEditorText(() => this.fireEvent('blur', this)), this._editor.onMouseUp(e => e.target.type === AAAAAA_LINE_NUMBERS && this.fireEvent('lineNumberClick', e.target.position.lineNumber, e)), this._editor.onDidChangeModelContent(e => this.fireEvent('change', this, this._editor.getValue())), this._editor.onDidChangeModel(e => this.fireEvent('change', this, this._editor.getValue())));
};

// иииииииииии:

<div>
	<Button
		onClick={()=>{
			window.open('htadsasdasdadsadsasdadsasdasdadsadsadsadsadsasdadstssssssadsasdasdasdd', '_blank');
		}}>Где
	взять
	личный
	Pipeline
	токен
	(Pipeline
	Triggers)</Button>
</div>

// иииииииииии:

const superFunc = ()=>{
	
	
	return {
		clearList: function(){
			Ext.create('Conf.view.base.Window', {
				title: TEXT.get('web.CONF.AdmScrlbalbalbalbalbalabalbablablalbalbalbalbalbalabalbablablaarList.Title'),
				width: 500,
				height: 100,
				closeAction: 'destroy',
				items: [
					{
						xtype: 'sssssss',
						items: [
							
							
							Ext.create('Conf.view.base.DatetimeField', {
								margin: '10 10 10 10',
								itemId: 'asdasdasdasd',
								fieldLabel: TEXT.get('web.CONF.AblallablablbalbalbalbalbalabalbablablablablablablablabateTo'),
								labelWidth: 180,
								labelPad: 10,
							})],
					},
				],
				bbar: {
					items: [
						'->',
						{
							xtype: 'button',
							text: TEXT.get('web.CONF.lbalbalbalbalbalabalbablablaarList.ButtonClear'),
							handler: function(btn){
								const wnd = btn.up('window');
								this.asdadssadasd(wnd.down('[itemId=asd]').getValue());
								wnd.hide();
							}.bind(this),
						},
					],
				},
			}).show();
		},
		
		arr:[()=>[{supeaaaaa:()=>{},'aaaaaaaaaaaaaaaa':1,'aaaaaaa5665aaaaaaaaa':1,'aaaaaaaaaaaa66aaaa':1,'aaaaaaaaaa88aaaaaa':1,'aaaaaaaaaaaa2aaaa':1,'aaaaaaaaaaaa33aaaa':1,'aaaaaaaaaa4aaaaaa':1,'aaaaaaaaaaaa5aaaa':1,}]]}
};


