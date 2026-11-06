import React from 'react';
import { Button } from 'antd';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';

interface NavigationButtonsProps {
  onBack?: () => void;
  onNext: () => void;
  nextLabel?: string;
  showBack?: boolean;
  loading?: boolean;
}

const PRIMARY = '#0F0B60';

const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  onBack,
  onNext,
  nextLabel = 'Continue',
  showBack = true,
  loading = false,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 32,
        paddingTop: 20,
        borderTop: '1px solid #F0F0F0',
      }}
    >
      {showBack && onBack ? (
        <Button
          icon={<ArrowLeftOutlined />}
          onClick={onBack}
          style={{
            height: 40,
            borderRadius: 8,
            fontWeight: 500,
            border: '1px solid #D1D5DB',
            color: '#374151',
          }}
        >
          Back
        </Button>
      ) : (
        <div />
      )}

      <Button
        type="primary"
        onClick={onNext}
        loading={loading}
        icon={<ArrowRightOutlined />}
        iconPosition="end"
        style={{
          height: 40,
          borderRadius: 8,
          fontWeight: 600,
          background: PRIMARY,
          border: 'none',
          paddingLeft: 24,
          paddingRight: 24,
        }}
      >
        {nextLabel}
      </Button>
    </div>
  );
};

export default NavigationButtons;
