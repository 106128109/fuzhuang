<template>
	<u-popup
		v-model="value"
		mode="bottom"
		:popup="false"
		:mask="true"
		:closeable="true"
		:safe-area-inset-bottom="true"
		close-icon-color="#ffffff"
		:z-index="uZIndex"
		:maskCloseAble="maskCloseAble"
		@close="close"
	>
		<u-tabs v-if="value" :list="genTabsList" :active-color="theme.bgColor" :is-scroll="true" :current="tabsIndex" @change="tabsChange" ref="tabs"></u-tabs>
		<view class="area-box">
			<view class="u-flex" :class="{ change: isChange }">
				<view class="area-item">
					<view class="u-padding-10 u-bg-gray" style="height: 100%;">
						<scroll-view :scroll-y="true" style="height: 100%">
							<u-cell-group>
								<u-cell-item
									v-for="(item, index) in provinces"
									:title="item.label"
									:arrow="false"
									:index="index"
									:key="index"
									@click="provinceChange"
								>
									<u-icon v-if="isChooseP && province === index" slot="right-icon" size="34" name="checkbox-mark"></u-icon>
								</u-cell-item>
							</u-cell-group>
						</scroll-view>
					</view>
				</view>
				<view class="area-item">
					<view class="u-padding-10 u-bg-gray" style="height: 100%;">
						<scroll-view :scroll-y="true" style="height: 100%">
							<u-cell-group v-if="isChooseP">
								<u-cell-item v-for="(item, index) in citys" :title="item.label" :arrow="false" :index="index" :key="index" @click="cityChange">
									<u-icon v-if="isChooseC && city === index" slot="right-icon" size="34" name="checkbox-mark"></u-icon>
								</u-cell-item>
							</u-cell-group>
						</scroll-view>
					</view>
				</view>

				<view class="area-item">
					<view class="u-padding-10 u-bg-gray" style="height: 100%;">
						<scroll-view :scroll-y="true" style="height: 100%">
							<u-cell-group v-if="isChooseC">
								<u-cell-item v-for="(item, index) in areas" :title="item.label" :arrow="false" :index="index" :key="index" @click="areaChange">
									<u-icon v-if="isChooseA && area === index" slot="right-icon" size="34" name="checkbox-mark"></u-icon>
								</u-cell-item>
							</u-cell-group>
						</scroll-view>
					</view>
				</view>
			</view>
		</view>
	</u-popup>
</template>

<script>

/**
 * city-select ????????????????????????
 * @property {String Number} z-index ????????????z-index????????????1075???
 * @property {Boolean} mask-close-able ????????????????????????????????????Picker?????????true???
 * @property {String} default-region ????????????????????????????????????
 * @property {String} default-code ????????????????????????????????????
 */
export default {
	name: 'fa-citys',
	props: {
		// ????????????????????????????????????????????????
		value: {
			type: Boolean,
			default: false
		},
		// ??????????????????????????????areaCode????????????["13", "1303", "130304"]
		areaCode: {
			type: Array,
			default() {
				return [];
			}
		},
		// ????????????????????????????????????Picker
		maskCloseAble: {
			type: Boolean,
			default: true
		},
		// ?????????z-index???
		zIndex: {
			type: [String, Number],
			default: 0
		}
	},
	data() {
		return {
			cityValue: '',
			isChooseP: false, //????????????????????????
			province: 0, //????????????
			provinces: [],
			isChooseC: false, //????????????????????????
			city: 0, //????????????
			citys: [],
			isChooseA: false, //????????????????????????
			area: 0, //????????????
			areas: [],
			tabsIndex: 0
		};
	},
	mounted() {
		this.init();
	},
	computed: {
		isChange() {
			return this.tabsIndex > 1;
		},
		genTabsList() {
			let tabsList = [
				{
					name: '?????????'
				}
			];
			if (this.isChooseP) {
				tabsList[0]['name'] = this.provinces[this.province]['label'];
				tabsList[1] = {
					name: '?????????'
				};
			}
			if (this.isChooseC) {
				tabsList[1]['name'] = this.citys[this.city]['label'];
				tabsList[2] = {
					name: '?????????'
				};
			}
			if (this.isChooseA) {
				tabsList[2]['name'] = this.areas[this.area]['label'];
			}
			return tabsList;
		},
		uZIndex() {
			// ?????????????????????z-index??????????????????
			return this.zIndex ? this.zIndex : this.$u.zIndex.popup;
		}
	},
	methods: {
		async getArea(type = '', id = '') {
			let where = {};
			if (type == 'citys') {
				where = {
					province: id
				};
			} else if (type == 'areas') {
				where = {
					city: id
				};
			}
			let res = await this.$api.area(where);
			if (res.code) {
				let key = type ? type : 'provinces';
				this[key] = res.data;				
			}
		},
		async init() {
			if (this.areaCode.length == 3) {
				await this.setProvince('', this.areaCode[0]);				
			}else{
				await this.getArea();
			}
		},
		async setProvince(label = '', value = '') {
			await this.getArea();
			this.provinces.map(async (v, k) => {
				if (value ? v.value == value : v.label == label) {
					await this.provinceChange(k);
					await this.setCity('', this.areaCode[1]);
				}
			});
		},
		async setCity(label = '', value = '') {			
			this.citys.map(async (v, k) => {
				if (value ? v.value == value : v.label == label) {
					await this.cityChange(k);
					await this.setArea('', this.areaCode[2]);
				}
			});
		},
		async setArea(label = '', value = '') {					
			this.areas.map((v, k) => {
				if (value ? v.value == value : v.label == label) {
					this.isChooseA = true;
					this.area = k;
					this.areaChange(k)
				}
			});
		},
		close() {
			this.$emit('input', false);
		},
		tabsChange(index) {
			this.tabsIndex = index;
		},
		async provinceChange(index) {
			this.isChooseP = true;
			this.isChooseC = false;
			this.isChooseA = false;
			this.province = index;					
			await this.getArea('citys', this.provinces[index].value);
			this.tabsIndex = 1;
		},
		async cityChange(index) {
			this.isChooseC = true;
			this.isChooseA = false;
			this.city = index;			
			await this.getArea('areas', this.citys[index].value);
			this.tabsIndex = 2;
		},
		areaChange(index) {
			this.isChooseA = true;
			this.area = index;
			let result = {};
			result.province = this.provinces[this.province];
			result.city = this.citys[this.city];
			result.area = this.areas[this.area];
			this.$emit('city-change', result);
			this.close();
		}
	}
};
</script>
<style lang="scss">
.area-box {
	width: 100%;
	overflow: hidden;
	height: 800rpx;

	> view {
		width: 150%;
		transition: transform 0.3s ease-in-out 0s;
		transform: translateX(0);

		&.change {
			transform: translateX(-33.3333333%);
		}
	}

	.area-item {
		width: 33.3333333%;
		height: 800rpx;
	}
}
</style>
