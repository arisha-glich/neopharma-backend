import type { Schema, Struct } from '@strapi/strapi';

export interface ReusableComponentCards extends Struct.ComponentSchema {
  collectionName: 'components_reusable_component_cards';
  info: {
    displayName: 'cards';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'NDASA is the voice of the nation\u2019s drug and alcohol screening industry. Our diverse membership includes testing companies, employers, laboratories, Third Party Administrators, human resources managers, safety professionals, substance abuse counselors and others. We stand together to maintain drug-free workplaces and protect public safety.'>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ReusableComponentVidoes extends Struct.ComponentSchema {
  collectionName: 'components_reusable_component_vidoes';
  info: {
    displayName: 'vidoes';
  };
  attributes: {
    date: Schema.Attribute.Date;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    Tittle: Schema.Attribute.Text;
  };
}

export interface SectionCards extends Struct.ComponentSchema {
  collectionName: 'components_section_cards';
  info: {
    displayName: 'cards';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionDistributorSection extends Struct.ComponentSchema {
  collectionName: 'components_section_distributor_sections';
  info: {
    displayName: 'distributor_section';
  };
  attributes: {
    cards: Schema.Attribute.Component<'shared.cards', true>;
    heading: Schema.Attribute.Text;
    show: Schema.Attribute.Boolean;
  };
}

export interface SectionListItem extends Struct.ComponentSchema {
  collectionName: 'components_section_list_items';
  info: {
    displayName: 'List Item';
  };
  attributes: {
    Listitem: Schema.Attribute.Text;
  };
}

export interface SectionSectionsBlueBg extends Struct.ComponentSchema {
  collectionName: 'components_section_sections_blue_bgs';
  info: {
    displayName: 'sections.blueBg';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    image1: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    image2: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    image3: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    isBlueTheme: Schema.Attribute.Boolean;
  };
}

export interface SectionSectionsCardGrid extends Struct.ComponentSchema {
  collectionName: 'components_section_sections_card_grids';
  info: {
    displayName: 'sections.cardGrid';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    sharedcard: Schema.Attribute.Component<'section.cards', false>;
  };
}

export interface SectionSectionsContentBlock extends Struct.ComponentSchema {
  collectionName: 'components_section_sections_content_blocks';
  info: {
    displayName: 'sections.contentBlock';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface SectionSectionsEnablementBenefits
  extends Struct.ComponentSchema {
  collectionName: 'components_section_sections_enablement_benefits';
  info: {
    displayName: 'sections.enablementBenefits';
  };
  attributes: {
    bullets: Schema.Attribute.Component<'shared.feature', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionSectionsFeatureList extends Struct.ComponentSchema {
  collectionName: 'components_section_sections_feature_lists';
  info: {
    displayName: 'sections.featureList';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    sharedfeature: Schema.Attribute.Component<'shared.feature-list', true>;
    title: Schema.Attribute.String;
    title_ul: Schema.Attribute.String;
  };
}

export interface SectionSectionsHeader extends Struct.ComponentSchema {
  collectionName: 'components_section_sections_headers';
  info: {
    displayName: 'sections.header';
  };
  attributes: {
    href: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionSectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_section_sections_heroes';
  info: {
    displayName: 'sections.hero';
  };
  attributes: {
    description: Schema.Attribute.Text;
    href: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionSectionsImpairmentTesting
  extends Struct.ComponentSchema {
  collectionName: 'components_section_sections_impairment_testings';
  info: {
    displayName: 'sections.impairmentTesting';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
    title_ul: Schema.Attribute.String;
  };
}

export interface SectionSectionsNeovaultGreen extends Struct.ComponentSchema {
  collectionName: 'components_section_sections_neovault_greens';
  info: {
    displayName: 'sections.neovaultGreen';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    image1: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    image2: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    image3: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    isGreenTheme: Schema.Attribute.Boolean;
  };
}

export interface SectionSectionsNewsList extends Struct.ComponentSchema {
  collectionName: 'components_section_sections_news_lists';
  info: {
    displayName: 'sections.newsList';
  };
  attributes: {
    newsItem: Schema.Attribute.Component<'section.shared-news-item', true>;
  };
}

export interface SectionSectionsProductCards extends Struct.ComponentSchema {
  collectionName: 'components_section_sections_product_cards';
  info: {
    displayName: 'sections.productCards';
  };
  attributes: {
    description: Schema.Attribute.Text;
    products: Schema.Attribute.Component<'shared.products', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionSectionsTrial extends Struct.ComponentSchema {
  collectionName: 'components_section_sections_trials';
  info: {
    displayName: 'sections.trial';
  };
  attributes: {
    description: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SectionSharedNewsItem extends Struct.ComponentSchema {
  collectionName: 'components_section_shared_news_items';
  info: {
    displayName: 'shared.newsItem';
  };
  attributes: {
    date: Schema.Attribute.Date;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionSlider extends Struct.ComponentSchema {
  collectionName: 'components_section_sliders';
  info: {
    displayName: 'slider';
  };
  attributes: {
    description: Schema.Attribute.Text;
    hasBackground: Schema.Attribute.Boolean;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Listitem: Schema.Attribute.Component<'section.list-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionSliderSection extends Struct.ComponentSchema {
  collectionName: 'components_section_slider_sections';
  info: {
    displayName: 'slider_section';
  };
  attributes: {
    slider: Schema.Attribute.Component<'shared.slider-section', true>;
  };
}

export interface SharedAdvantageCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_advantage_cards';
  info: {
    displayName: 'advantage_card';
  };
  attributes: {
    button_text: Schema.Attribute.String;
    button_url: Schema.Attribute.String;
    Description: Schema.Attribute.Text;
    feature_list: Schema.Attribute.Component<'shared.feature-list', true>;
    Heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    reverse: Schema.Attribute.Boolean;
  };
}

export interface SharedBlocks extends Struct.ComponentSchema {
  collectionName: 'components_shared_blocks';
  info: {
    displayName: 'blocks';
  };
  attributes: {
    description: Schema.Attribute.Text;
    hasBackground: Schema.Attribute.Boolean;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    sectionscontentBlock: Schema.Attribute.Component<
      'section.sections-content-block',
      true
    >;
    ul: Schema.Attribute.Component<'shared.feature-list', true>;
  };
}

export interface SharedCards extends Struct.ComponentSchema {
  collectionName: 'components_shared_cards';
  info: {
    displayName: 'Cards';
  };
  attributes: {
    icon: Schema.Attribute.Enumeration<
      [
        " 'clipboard-list': ClipboardList,",
        "  'history': History,",
        "  'lightbulb': Lightbulb,",
        "  'file-text': FileText,",
        "  'flask-conical': FlaskConical,",
        "  'smartphone': Smartphone,",
        "  'scan-search': ScanSearch,",
        " 'user-square': UserSquare,",
        "  'refresh-ccw': RefreshCcw,",
        "  'boxes': Boxes,",
        "  'list-checks': ListChecks,",
        "  'message-circle': MessageCircle,",
        "  'columns': Columns,",
      ]
    >;
    title: Schema.Attribute.Text;
  };
}

export interface SharedCertificationSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_certification_sections';
  info: {
    displayName: 'certification_section';
  };
  attributes: {
    certification_section: Schema.Attribute.Boolean;
  };
}

export interface SharedChoose extends Struct.ComponentSchema {
  collectionName: 'components_shared_chooses';
  info: {
    displayName: 'choose';
  };
  attributes: {};
}

export interface SharedEnablementSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_enablement_sections';
  info: {
    displayName: 'enablement_section';
  };
  attributes: {
    enablement_section: Schema.Attribute.Boolean;
  };
}

export interface SharedExchangeFlowSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_exchange_flow_sections';
  info: {
    displayName: 'exchange_flow_section';
  };
  attributes: {
    exchange_flow_section: Schema.Attribute.Boolean;
  };
}

export interface SharedExecutiveCardSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_executive_card_sections';
  info: {
    displayName: 'executive_card_section';
  };
  attributes: {
    executive_card_section: Schema.Attribute.Boolean;
  };
}

export interface SharedFeature extends Struct.ComponentSchema {
  collectionName: 'components_shared_features';
  info: {
    displayName: 'Feature';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Descriptio'>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Text: Schema.Attribute.String & Schema.Attribute.DefaultTo<'title'>;
  };
}

export interface SharedFeatureList extends Struct.ComponentSchema {
  collectionName: 'components_shared_feature_lists';
  info: {
    displayName: 'feature_list';
  };
  attributes: {
    feature_item: Schema.Attribute.Text;
  };
}

export interface SharedFeaturess extends Struct.ComponentSchema {
  collectionName: 'components_shared_featuresses';
  info: {
    displayName: 'Featuress';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedMembershipSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_membership_sections';
  info: {
    displayName: 'membership_section';
  };
  attributes: {
    membership_section: Schema.Attribute.Boolean;
  };
}

export interface SharedProductSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_product_sections';
  info: {
    displayName: 'product_section';
  };
  attributes: {
    product_section: Schema.Attribute.Boolean;
  };
}

export interface SharedProducts extends Struct.ComponentSchema {
  collectionName: 'components_shared_products';
  info: {
    displayName: 'products';
  };
  attributes: {
    ctaLabel: Schema.Attribute.Text;
    ctaLink: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
    shortDescription: Schema.Attribute.Text;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSectionEmployerResult extends Struct.ComponentSchema {
  collectionName: 'components_shared_section_employer_results';
  info: {
    displayName: 'section_employer_result';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedSectionNeovaultSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_section_neovault_sections';
  info: {
    displayName: 'section.neovault_section';
  };
  attributes: {
    neovault_section: Schema.Attribute.Boolean;
  };
}

export interface SharedSections extends Struct.ComponentSchema {
  collectionName: 'components_shared_sections';
  info: {
    displayName: 'Sections';
  };
  attributes: {};
}

export interface SharedSectionsContentBlocks extends Struct.ComponentSchema {
  collectionName: 'components_shared_sections_content_blocks';
  info: {
    displayName: 'sections.contentBlocks';
  };
  attributes: {
    blocks: Schema.Attribute.Component<'shared.blocks', true>;
  };
}

export interface SharedSectionsTrial extends Struct.ComponentSchema {
  collectionName: 'components_shared_sections_trials';
  info: {
    displayName: 'sections.trial';
  };
  attributes: {};
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSharedDetails extends Struct.ComponentSchema {
  collectionName: 'components_shared_shared_details';
  info: {
    displayName: 'shared.details';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedSharedMetadata extends Struct.ComponentSchema {
  collectionName: 'components_shared_shared_metadata';
  info: {
    displayName: 'shared.metadata';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedSliderSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_slider_sections';
  info: {
    displayName: 'slider_section';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    feature_list: Schema.Attribute.Component<'shared.feature-list', true>;
    hasBackground: Schema.Attribute.Boolean;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.Text;
  };
}

export interface SharedVisionMissionSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_vision_mission_sections';
  info: {
    displayName: 'vision_mission_section';
  };
  attributes: {
    vision_mission_section: Schema.Attribute.Boolean;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'reusable-component.cards': ReusableComponentCards;
      'reusable-component.vidoes': ReusableComponentVidoes;
      'section.cards': SectionCards;
      'section.distributor-section': SectionDistributorSection;
      'section.list-item': SectionListItem;
      'section.sections-blue-bg': SectionSectionsBlueBg;
      'section.sections-card-grid': SectionSectionsCardGrid;
      'section.sections-content-block': SectionSectionsContentBlock;
      'section.sections-enablement-benefits': SectionSectionsEnablementBenefits;
      'section.sections-feature-list': SectionSectionsFeatureList;
      'section.sections-header': SectionSectionsHeader;
      'section.sections-hero': SectionSectionsHero;
      'section.sections-impairment-testing': SectionSectionsImpairmentTesting;
      'section.sections-neovault-green': SectionSectionsNeovaultGreen;
      'section.sections-news-list': SectionSectionsNewsList;
      'section.sections-product-cards': SectionSectionsProductCards;
      'section.sections-trial': SectionSectionsTrial;
      'section.shared-news-item': SectionSharedNewsItem;
      'section.slider': SectionSlider;
      'section.slider-section': SectionSliderSection;
      'shared.advantage-card': SharedAdvantageCard;
      'shared.blocks': SharedBlocks;
      'shared.cards': SharedCards;
      'shared.certification-section': SharedCertificationSection;
      'shared.choose': SharedChoose;
      'shared.enablement-section': SharedEnablementSection;
      'shared.exchange-flow-section': SharedExchangeFlowSection;
      'shared.executive-card-section': SharedExecutiveCardSection;
      'shared.feature': SharedFeature;
      'shared.feature-list': SharedFeatureList;
      'shared.featuress': SharedFeaturess;
      'shared.media': SharedMedia;
      'shared.membership-section': SharedMembershipSection;
      'shared.product-section': SharedProductSection;
      'shared.products': SharedProducts;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.section-employer-result': SharedSectionEmployerResult;
      'shared.section-neovault-section': SharedSectionNeovaultSection;
      'shared.sections': SharedSections;
      'shared.sections-content-blocks': SharedSectionsContentBlocks;
      'shared.sections-trial': SharedSectionsTrial;
      'shared.seo': SharedSeo;
      'shared.shared-details': SharedSharedDetails;
      'shared.shared-metadata': SharedSharedMetadata;
      'shared.slider': SharedSlider;
      'shared.slider-section': SharedSliderSection;
      'shared.vision-mission-section': SharedVisionMissionSection;
    }
  }
}
